import React from 'react';

import PokemonCard from './PokemonCard';

import {useQuery} from '@apollo/react-hooks';

import {GetPokemonByID} from '../queries/query';

const SearchByID = ({ searchText, showResults }) => {
    const {loading, error, data} = useQuery(GetPokemonByID, {variables: {
        id: searchText
    }});

    if (!showResults) return (
        <span></span>
    );
    if (!searchText) return (
        <p>Search Pokemon By ID!</p>
    );
    if (loading) return (
        <p>Loading...</p>
    );
    if (error || isNaN(searchText)) return (
        <p>No Such Pokemon ID!</p>
    );
    if (data) return (
        <div className = "search-by-id">
            <PokemonCard data = {data["pokemonByID"]}/>
        </div>
    );
};

export default SearchByID;