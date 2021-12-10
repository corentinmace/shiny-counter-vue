<template>
       <TopBar>
             <h1 class="text-text_primary font-bold">Global Hunts</h1>
        </TopBar>
       <form @submit.prevent="createHunt" v-if="showModal">
            <div class="flex justify-center items-center antialiased fixed backdrop-filter backdrop-blur-sm w-full h-full z-10" @click.self="toggleModal">
                <div class="bg-secondary text-text_primary flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg shadow-xl">
                    <div class="flex flex-row justify-between p-6 rounded-tl-lg rounded-tr-lg">
                        <p class="font-bold">Create Hunt</p>
                        <p class="font-bold cursor-pointer" @click="toggleModal">X</p>
                    </div>
                    <div class="flex flex-col px-6 py-5">
                        <img class="w-1/4 mx-auto" :src="sprite">
                    <div class="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
                        <div class="w-full sm:w-1/2">
                            <p class="mb-2 font-semibold">Pokémon</p>
                            <select @change="getPokeInfo" class="text-text_black block w-full mt-1 rounded-md shadow-sm focus:indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="pokemon" required>
                                <option v-for="(pokemon, id) of pokemons" :value="pokemon.url">{{ pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1).replace('-', ' ')  }}</option>
                            </select> 
                        </div>
                        <div class="w-full sm:w-1/2 mt-2 sm:mt-0">
                            <p class="mb-2 font-semibold">Game</p>
                            <select @change="setGame" class="text-text_black block w-full mt-1 rounded-md shadow-sm focus:indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="game" required>
                                <option v-for="(game, id) in games" :value="game.url">{{ game.name.charAt(0).toUpperCase()+game.name.slice(1).replace('-', ' ') }}</option>
                                <option value="sword">Sword</option>
                                <option value="sword">Shield</option>
                            </select>
                        </div>
                    </div>
                    <hr />
                    <div class="flex items-center mt-5 mb-3 space-x-4">
                        <input v-model="chroma"
                        class="rounded border-red-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0focus:ring-indigo-200 focus:ring-opacity-50 x"
                        type="checkbox"
                        id="check2"
                        name="check2"
                            checked
                        />
                        <label class="ml-2" for="check2">Chroma Charm</label>
                        <img class="w-10" src="https://www.pokepedia.fr/images/6/65/Sprite_Charme_Chroma_NB2.png">
                        <br />
                    </div>
                </div>
                <div class="flex flex-row items-center justify-between p-5 rounded-bl-lg rounded-br-lg">
                    <!-- <input type="text" class="hidden" v-model="form.counter">
                    <input type="text" class="hidden" v-model="form.user"> -->
                    <button class="bg-primary text-text_tertiary font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline" type="submit">Create</button>
                </div>
            </div>
        </div>
    </form>

        <button v-if="isLoggedIn" class="bg-secondary hover:bg-red-500 text-text_primary fixed text-5xl h-20 w-20 rounded-full focus:outline-none focus:shadow-outline bottom-5 my-20 right-5" @click="toggleModal">+</button>
    <div class="flex justify-center items-center py-10 flex-col z-0">
            <GlobalHuntList  />
    </div>
        <div class="fixed w-screen bottom-20 text-center py-4 lg:px-4" v-if="!isLoggedIn">
            <div class="p-2 bg-secondary items-center text-text_primary leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                <span class="flex rounded-full bg-tertiary uppercase px-2 py-1 text-xs font-bold mr-3">Alert</span>
                <span class="font-semibold mr-2 text-left flex-auto">If you want to create a hunt, please <router-link class="text-text_light" to="/sign-in">log-in</router-link> or <router-link class="text-text_light" to="/register">register</router-link></span>
                <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
            </div>
        </div>
    
</template>

<script>
import GlobalHuntList from '../components/GlobalHuntList.vue'

import axios from 'axios'
import { ref, onMounted } from 'vue'
import { doc, setDoc, addDoc, updateDoc, getFirestore, collection } from 'firebase/firestore'
import { getAuth, onAuthStateChanged} from 'firebase/auth'
import { useRoute } from 'vue-router'
import router from "../router"
import TopBar from "../components/TopBar.vue"


    export default {

        name: 'Home',
        components: {
            TopBar,
            GlobalHuntList
        },
        setup() {

            const uid = ref('')
            const username = ref('')
            const isLoggedIn = ref(false)
            const auth = getAuth()

            // runs after firebase is initialized
            auth.onAuthStateChanged(function(user) {
                if (user) {
                    isLoggedIn.value = true // if we have a user
                    uid.value = user.uid
                    username.value = user.displayName
                } else {
                    isLoggedIn.value = false // if we do not
                }
            })
            const db = getFirestore();

            const showModal = ref(false)
            const toggleModal = () => {
                showModal.value = !showModal.value
            }
            const games = ref([])
            const pokemon = ref('')
            const pokemonApiLink = ref ('')
            const pokemonName = ref('')
            const chroma = ref(false)
            const sprite = ref('')
            const pokemons = ref([])
            const game = ref('')
            

            const getPokeInfo = (e) => {
                games.value = []
                pokemonApiLink.value = e.target.value
                axios.get(pokemonApiLink.value)
                    .then(response => {
                        //console.log(response)
                        sprite.value = response.data.sprites.front_shiny
                        pokemonName.value = response.data.name
                        for (let i = 0; i < response.data.game_indices.length; i++) {
                            games.value.push(response.data.game_indices[i].version)
                        }
                        //console.log("game", games.value[0])
                    })
            }

            const createHunt = async() => {
                const docRef = await addDoc(collection(db, "hunts"), {
                    chroma: chroma.value,
                    counter: 0,
                    game: game.value,
                    pokemon: pokemonApiLink.value,
                    pokemonName: pokemonName.value,
                    status: 'running',
                    sprite: sprite.value,
                    user: uid.value,
                    username: username.value
                });
                //console.log("Document written with ID : ", docRef.id)
                await updateDoc(docRef, {
                    id: docRef.id
                })
                //console.log("updated doc")
                router.push({name : 'Hunt' , params: { id: docRef.id }})

            }

            onMounted(() => {
                axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118`)
                    .then(response => {
                        
                        for (let i = 0; i < response.data.results.length; i++) {
                            pokemons.value.push(response.data.results[i])
                        }
                        //console.log(pokemons.value[0])
                    })   
                })



                return { getPokeInfo, games, pokemon, chroma, sprite, pokemons, pokemonApiLink, showModal, toggleModal, game, createHunt, isLoggedIn }}
    }

</script>