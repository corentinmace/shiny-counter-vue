<template>
<form @submit.prevent="onSubmit">
    <div class="flex justify-center items-center antialiased fixed backdrop-filter backdrop-blur-sm w-full h-full" @click.self="closeModal">
        <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
            <div class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
            <p class="font-semibold text-gray-800">Create Hunt</p>
            <p @click="toggleModal" class="font-semibold text-gray-800 cursor-pointer">X</p>
            </div>
            <div class="flex flex-col px-6 py-5 bg-gray-50">
                <img class="w-1/4 mx-auto" :src="sprite">
            <div class="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
                <div class="w-full sm:w-1/2">
                <p class="mb-2 font-semibold text-gray-700">Pokémon</p>
                <select @change="requestPokemon" class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="form.pokemon" required>
                <option v-for="pokemon in pokemons" :value="pokemon.url">{{ pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1).replace('-', ' ') }}</option>
                </select> 
                </div>
                <div class="w-full sm:w-1/2 mt-2 sm:mt-0">
                <p class="mb-2 font-semibold text-gray-700">Game</p>
                <select class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="form.game" required>
                <option v-for="game in games" :value="game">{{ game.version.name.charAt(0).toUpperCase()+game.version.name.slice(1).replace('-', ' ') }}</option>
                </select>
                </div>
            </div>
            <hr />
            <div class="flex items-center mt-5 mb-3 space-x-4">
                <input v-model="form.chroma"
                class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0focus:ring-indigo-200 focus:ring-opacity-50 x"
                type="checkbox"
                id="check2"
                name="check2"
                    checked
                />

                <label class="ml-2" for="check2">Charme Chroma</label>
                <img class="w-10" src="https://www.pokepedia.fr/images/6/65/Sprite_Charme_Chroma_NB2.png">
                <br />
            </div>
            </div>
            <div
            class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
            >
            <input type="text" class="hidden" v-model="form.counter">
            <input type="text" class="hidden" v-model="form.user">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="submit">Create</button>
            </div>
        </div>
        </div>
    </form>
</template>

<script>
import axios from 'axios'
import { reactive, computed } from 'vue'
import { createHunt } from '../../firebase.js'
import { useRoute, useRouter } from 'vue-router'
import PokeFunctions from '../../composables/functions.js'

export default {
    setup() {

        const { closeModal, toggleModal } = PokeFunctions()
        const router = useRouter()
        const form = reactive({ pokemon: '', game: '', chroma: '', counter: 0, user: '', sprite: ''})
        const onSubmit = async () => {
            await createHunt({ ...form })
            form.pokemon = ''
            form.game = ''
            form.chroma = ''
            form.counter = 0
            form.user = ''
            form.sprite = ''
            //router.push('/hunt/:id')

        }

        return { form, onSubmit, toggleModal, closeModal }
    },
    data() {
        return {
            pokemons: [],
            sprite: '',
            games: [],
            formatedName: '', 
            version: ''
        }
    },
    methods: {
        // toggleModal() {
        //     this.$parent.toggleModal()
        // }, 
        closeModal() {
            this.$emit('close')
        },
        requestPokemon(e) {
            let url = e.target.value
            axios.get(url)
                .then(response => {
                    console.log(response.data)
                this.sprite = response.data.sprites.front_shiny
                this.games = response.data.game_indices

                //this.version = version
            })
            .catch((error) => {
                console.error(error)
            })
        },

        requestGame() {

        }
    },
    mounted() {
         axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118`)
                .then(response => {
                this.pokemons = response.data.results
            })
    },
}

</script>