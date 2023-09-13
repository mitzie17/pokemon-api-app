import React, { useState, useEffect } from "react";
import { pokemonsApi } from "../Api/PokemonsApi";

export const FilterButtons = (props) => {
  const { typesButtons, filterPokemon, pokemons } = props;
  const [filtredPokemon, setFiltredPokemon] = useState([]);
  useEffect(() => {
    setFiltredPokemon({ pokemons });
  }, [pokemons]);
  console.log(typesButtons);
  function handlePokemon(e) {
    console.log(e);
    let typePokemon = e.target.value;
    typePokemon !== "all"
      ? setFiltredPokemon(filterPokemon(typePokemon))
      : setFiltredPokemon({ pokemons });
  }

  return (
    <div>
      Filter by:
      <div className="d-flex justify-content-center">
        {typesButtons.map((buttonType, index) => (
          <button
            className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
            value={buttonType}
            onClick={handlePokemon}
            key={index}
          >
            {buttonType}
          </button>
        ))}
      </div>
    </div>
  );
};
