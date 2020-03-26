const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
      pokemons: [Pokemon]!
      pokemonByID(id: ID!): Pokemon
      pokemonByName(name: String!): Pokemon
  }

  type Pokemon {
      name: String
      id: ID!
      stats: String
      sprites: String
  }

  type Collection {
    pokemons: [Pokemon]
    user: User
  }

  type User {
      username: String!
      id: ID!
      email: String!
      password: String!
  }

  type Mutation {
    addPokemon(pokemon: ID!): CollectionUpdateResponse!

    deletePokemon(pokemon: ID!): CollectionUpdateResponse!

    login(email: String!): String!
  }

  type CollectionUpdateResponse {
      success: Boolean!
      message: String
      collection: Collection
  }

`;

module.exports = typeDefs;