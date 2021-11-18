<template>
<form @submit.prevent="">
    <div class="flex justify-center h-screen items-center bg-gray-200 antialiased">
        <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
            <div class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
            <p class="font-semibold text-gray-800">Create Hunt</p>
            </div>
            <div class="flex flex-col px-6 py-5 bg-gray-50">
                <img class="w-1/4 mx-auto" :src="sprite">
            <div class="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
                <div class="w-full sm:w-1/2">
                <p class="mb-2 font-semibold text-gray-700">Pokémon</p>
                <select @change="requestPokemon" class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="version">
                <option v-for="pokemon in pokemons" :value="pokemon.url">{{ pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1).replace('-', ' ') }}</option>
                </select>
                </div>
                <div class="w-full sm:w-1/2 mt-2 sm:mt-0">
                <p class="mb-2 font-semibold text-gray-700">Game</p>
                <select class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="version">
                <option v-for="game in games" :value="game">{{ game.version.name.charAt(0).toUpperCase()+game.version.name.slice(1).replace('-', ' ') }}</option>
                </select>
                </div>
            </div>
            <hr />
            <div class="flex items-center mt-5 mb-3 space-x-4">
                <input
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
            <p class="font-semibold text-gray-600">Cancel</p>
            <button class="px-4 py-2 text-white font-semibold bg-blue-500 rounded">Create</button>
            </div>
        </div>
        </div>
    </form>
</template>

<script>
import axios from 'axios'

export default {
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
        requestPokemon(e) {
            let url = e.target.value
            axios.get(url)
                .then(response => {
                this.sprite = response.data.sprites.front_shiny
                this.games = response.data.game_indices
                //this.version = version
            })
            .catch((error) => {
                console.error(error)
            })
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