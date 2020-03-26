const app = require('express')();
const { ApolloServer } = require('apollo-server');
const cors = require('cors');

const typeDefs = require('./schema');

const resolvers = require('./resolvers');

const PokemonAPI = require('./datasources/pokemon');


const myPlugin = {

  // Fires whenever a GraphQL request is received from a client.
  requestDidStart(requestContext) {
    console.log('Request started! Query:\n' +
      requestContext.request.query);

    return {

      // Fires whenever Apollo Server will parse a GraphQL
      // request to create its associated document AST.
      parsingDidStart(requestContext) {
        console.log('Parsing started!');
      }

      // Fires whenever Apollo Server will validate a
      // request's document AST against your GraphQL schema.
      // validationDidStart(requestContext) {
      //   console.log('Validation started!');
      // }

    }
  },
};

app.use(cors());


const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    pokemonAPI: new PokemonAPI()
  }),
  plugins: [
    myPlugin
  ]
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});