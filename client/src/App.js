import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


import Pokemon from './components/Pokemon';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Pokemon />
      </div>
    </ApolloProvider>
  );
}

export default App;
