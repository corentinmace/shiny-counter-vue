 const axios = require('axios');

 export const requestPokemon = (name) => {
    let pokemonData
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => {
            console.log("api side", response)
            pokemonData = response
        })
        .catch((error) => {
            console.error(error)
        })
        console.log("pokemon", pokemonData)
        return pokemonData
    }
 


