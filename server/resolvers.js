module.exports = {
    Query: {
      pokemonByID: (_, { id }, { dataSources }) =>
        dataSources.pokemonAPI.getPokemonByID({ pokemonID: id }),
      pokemonByName: (_, { name }, { dataSources }) =>
        dataSources.pokemonAPI.getPokemonByName({ pokemonName: name })
    }
};