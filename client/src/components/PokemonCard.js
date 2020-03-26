import React from 'react';

import { Button, Card, Container, ListGroup } from 'react-bootstrap';

const PokemonCard = ({ data }) => {
    let {name, stats, sprites, id} = data;

    sprites = JSON.parse(sprites);
    stats = JSON.parse(stats);

    const frontImage = sprites["front_default"];

    const statList = stats.map((obj) => {
        return (
            <ListGroup.Item key = {obj["stat"]["name"]}><b>{obj["stat"]["name"]}:</b>  {obj["base_stat"]}</ListGroup.Item>
        );
    });

    console.log (data);
    return (
        <div className = "pokemon-card">
            <Container fluid="sm">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={frontImage} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item><b>ID:</b>  {id}</ListGroup.Item>
                                {statList}
                            </ListGroup>
                        </Card.Text>
                        <Button variant="primary">Add To Collection</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default PokemonCard;