import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PokemonsList from "./PokemonsList";

export const NewPokemonForm = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [ability, setAbility] = useState("");

  const [showPokemonList, setShowPokemonList] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const newPokemon = {
      name: name,
      type: type,
      abilities: [ability],
    };
    props.createPokemon(newPokemon);
    setShowPokemonList(true);
  };

  return (
    <div>
      {showPokemonList ? (
        <PokemonsList />
      ) : (
        <Form onSubmit={onSubmit}>
          <h3 className="form-heading">Create new pokemon:</h3>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label className="formLabels">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Pokemon name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="type">
            <Form.Label className="formLabels">Pokemon Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Pokemon Type"
              onChange={(e) => setType(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="ability">
            <Form.Label className="formLabels">Ability</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type ability..."
              onChange={(e) => setAbility(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
};
