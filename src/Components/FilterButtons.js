import React, { useState, useEffect } from "react";
import { pokemonsApi } from "../Api/PokemonsApi";
import Button from "react-bootstrap/Button";

export const FilterButtons = (props) => {
  const { typesButtons, pokemons, handleTypeBtn, buttons } = props;

  // fetchPokemonTypes = async () => {
  //   const pokemons = await pokemonsApi.get();
  //   this.setState({ pokemons });
  //   console.log(pokemons);
  //   const filteredPokemon = [
  //     ...new Set(pokemons.map((pokemon) => pokemon.type)),
  //   ];
  //   console.log(filteredPokemon);
  //   return filteredPokemon;
  // };

  return (
    <div className="filter-buttons">
      Filter by:
      {props.buttons.map((button, index) => {
        return (
          <button key={index} value={button} onClick={props.handleTypeBtn}>
            {button}
          </button>
        );
      })}
      {/* <div className="d-flex justify-content-center">
        {typesButtons.map((buttonType, index) => (
          <button
            className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
            value={buttonType}
            onClick={props.handleTypeBtn}
            key={index}
          >
            {buttonType}
          </button>
        ))}
      </div> */}
    </div>
  );
};
