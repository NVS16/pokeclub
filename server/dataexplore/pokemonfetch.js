const fetch = require('node-fetch');

const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((pokemondata) => {
        console.log(pokemondata);
    });