import React from "react";

export const Pokemon = (props) => {

    const { pokemon, updatePokemon} = props;

    // Here we pass in the id of the ability to be removed.
    const deleteAbility = (abilityId) => {
    // The updatedPokemon variable holds the pokemon object that has the ability we want to remove.
        const updatedPokemon = {
    // The pokemon object's abilities array is updated by filtering out the ability we want to remove.
            ...pokemon,
            abilities: pokemon.abilities.filter((pokemon) => pokemon.id !== abilityId)
        };
    // Then the updatePokemon method (from the PokemonsList class) is called and the updatedPokemon object is passed in.
        updatePokemon(updatedPokemon);
    }

    // Here we pass in an ability to the addNewAbility method
    const addNewAbility = (ability) => {
    // This method returns the updatePokemon method, which takes in a pokemon object, and a new abilities array with the new ability included.
        return updatePokemon({ ...pokemon, abilities: [...pokemon.abilities, ability]})
    };

};