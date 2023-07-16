import React from "react";
import { NewAbilityForm } from "./NewAbilityForm";

export const Pokemon = (props) => {

    const { pokemon, updatePokemon } = props;

    // Here we pass in the id of the ability to be removed.
    const deleteAbility = (abilityId) => {
    // The updatedPokemon variable holds the pokemon object that has the ability we want to remove.
        const updatedPokemon = {
    // The pokemon object's abilities array is updated by filtering out the ability we want to remove.
            ...pokemon,
            abilities: pokemon.abilities.filter((x) => x !== abilityId)
        };
    // Then the updatePokemon method (from the PokemonsList class) is called and the updatedPokemon object is passed in.
        updatePokemon(updatedPokemon);
    }

    // Here we pass in an ability to the addNewAbility method
    const addNewAbility = (ability) => updatePokemon({ ...pokemon, abilities: [...pokemon.abilities, ability]})
    // This method returns the updatePokemon method, which takes in a pokemon object, and a new abilities array with the new ability included.
    

    const abilities = () => (
        <ul>
            {pokemon.abilities.map((ability, index) => (
                <li key={index}>
                    <label>{ability}</label>
                    <button onClick={(e) => deleteAbility(ability)}>Delete</button>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <h1>{pokemon.name}</h1>
            {
            abilities({abilities, pokemonId: pokemon.id, deleteAbility})
            }
            <NewAbilityForm addNewAbility={addNewAbility}/>
        </div>
    );

};