import React, { useState } from 'react';

import SearchByID from './SearchByID';
import SearchByName from './SearchByName';


import { Button, InputGroup,FormControl, Container, Form } from 'react-bootstrap';


const Pokemon = () => {
    const [s1bg, sets1bg] = useState('primary');
    const [s2bg, sets2bg] = useState('secondary');
    const [searchText, setSearchText] = useState('');
    const [searchType, setSearchType] = useState(1);
    const [showResOne, setResOne] = useState(true);
    const [showResTwo, setResTwo] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(searchText);
        if (searchType === 1) {
            setResOne(true);
            setResTwo(false);
        } else if (searchType === 2) {
            setResOne(false);
            setResTwo(true);
        }
    };

    const handleTextChange = (e) => {
        setSearchText(e.target.value);
    };


    return (
        <div className="pokemon">
            <Container fluid="sm">
                <h1>Welcome to PokeClub!</h1>
                <Form onSubmit =  {handleSubmit}>
                    <Form.Group controlId="searchForPokemon">
                        <InputGroup>
                            <FormControl
                            placeholder="Search for pokemon"
                            aria-label="pokemon search"
                            aria-describedby="basic-addon2"
                            value = {searchText}
                            onChange = {handleTextChange}
                            required
                            />
                            <InputGroup.Append>
                            <Button variant={s1bg} 
                            onClick = {() => {
                                sets1bg('primary');
                                sets2bg('secondary');
                                setSearchType(1);
                                setResOne(true);
                                setResTwo(false);
                            }} id = "s1">
                                By ID
                            </Button>
                            <Button variant={s2bg} onClick = {() => {
                                sets2bg('primary');
                                sets1bg('secondary');
                                setSearchType(2);
                                setResOne(false);
                                setResTwo(true);
                            }} id = "s2">By Name</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>
                    <Button variant="primary" type="submit" className = "float-left">
                        Search
                    </Button>
                </Form>
            </Container>
            <SearchByID searchText = {searchText} showResults = {showResOne}/>
            <SearchByName searchText = {searchText} showResults = {showResTwo}/>
        </div>
    );
};

export default Pokemon;