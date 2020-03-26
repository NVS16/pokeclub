import {gql} from 'apollo-boost';

const GetPokemonByID = gql`
    query getPokemonByID($id: ID!) {
        pokemonByID(id: $id) {
            name
            stats
            sprites
            id
        }
    }
`

const GetPokemonByName = gql`
    query getPokemonByName($name: String!) {
        pokemonByName(name: $name) {
            name
            stats
            sprites
            id
        }
    }
`

export {GetPokemonByID, GetPokemonByName};