const { RESTDataSource } = require('apollo-datasource-rest');

class PokemonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  async getPokemonByID({ pokemonID }) {
    const query = "pokemon/" + pokemonID;
    console.log("The url -- " , query);
    const response = await this.get(query);
    return this.pokemonReducer(response);
  }

  async getPokemonByName({ pokemonName }) {
    const query = "pokemon/" + pokemonName;
    console.log("The url -- " , query);
    const response = await this.get(query);
    return this.pokemonReducer(response);
  }

  pokemonReducer(pokemon) {
    console.log("the pokemon --- ", pokemon);
    return {
      id: pokemon.id || 0,
      name: pokemon.name,
      stats: JSON.stringify(pokemon.stats),
      sprites: JSON.stringify(pokemon.sprites)
    };
  }
}

module.exports = PokemonAPI;