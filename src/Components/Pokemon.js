import React from "react";
import { NewAbilityForm } from "./NewAbilityForm";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export const Pokemon = (props) => {
  const { pokemon, updatePokemon, deletePokemon } = props;

  // Here we pass in the id of the ability to be removed.
  const deleteAbility = (abilityId) => {
    // The updatedPokemon variable holds the pokemon object that has the ability we want to remove.
    const updatedPokemon = {
      // The pokemon object's abilities array is updated by filtering out the ability we want to remove.
      ...pokemon,
      abilities: pokemon.abilities.filter((x) => x !== abilityId),
    };
    // Then the updatePokemon method (from the PokemonsList class) is called and the updatedPokemon object is passed in.
    updatePokemon(updatedPokemon);
  };

  // Here we pass in an ability to the addNewAbility method
  const addNewAbility = (ability) =>
    updatePokemon({ ...pokemon, abilities: [...pokemon.abilities, ability] });
  // This method returns the updatePokemon method, which takes in a pokemon object, and a new abilities array with the new ability included.

  const abilities = () => (
    <ListGroup className="list-group-flush">
      {pokemon.abilities.map((ability, index) => (
        <ListGroup.Item>
          <div key={index}>
            <label>{ability}</label>
            <button
              className="btn btn-danger btn-sm"
              onClick={(e) => deleteAbility(ability)}
            >
              Delete
            </button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );

  const removePokemon = (pokemonId) => {
    deletePokemon(pokemonId);
  };

  const bgColorChange = (pokemonType) => {
    if (pokemon.type === "Water") {
      return "primary";
    } else if (pokemon.type === "Fire") {
      return "danger";
    } else if (pokemon.type === "Grass") {
      return "success";
    } else if (pokemon.type === "Electric") {
      return "warning";
    } else if (pokemon.type === "Ice") {
      return "info";
    } else if (pokemon.type === "Normal") {
      return "secondary";
    } else {
      return "light";
    }
  };

  return (
    <Card
      className="mb-2 h-100 overflow-hidden align-items-center"
      bg={bgColorChange(pokemon.type)}
    >
      <Card.Header as="h1">
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Subtitle>Type: {pokemon.type}</Card.Subtitle>
        <button
          className="btn btn-dark btn-sm"
          onClick={(e) => removePokemon(pokemon.id)}
        >
          Delete
        </button>
      </Card.Header>
      <Card.Body>
        <Card.Subtitle>Abilities:</Card.Subtitle>
        <Card.Text>
          {abilities({ abilities, pokemonId: pokemon.id, deleteAbility })}

          <NewAbilityForm addNewAbility={addNewAbility} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
