import React from 'react';

import PokemonCard from './PokemonCard';

import {useQuery} from '@apollo/react-hooks';

import {GetPokemonByName} from '../queries/query';

const SearchByName = ({ searchText, showResults }) => {
    const {loading, error, data} = useQuery(GetPokemonByName, {variables: {
        name: searchText
    }});
    
    if (!showResults) return (
        <span></span>
    );
    if (!searchText) return (
        <p>Search Pokemon By Name!</p>
    );
    if (loading) return (
        <p>Loading...</p>
    );
    if (error || !isNaN(searchText)) return (
        <p>No Such Pokemon Name!</p>
    );
    if (error) throw error;
    if (data) return (
        <div className = "search-by-name">
            <PokemonCard data = {data["pokemonByName"]}/>
        </div>
    );
};

export default SearchByName;