import React, { useState, useEffect } from "react";
import { pokemonsApi } from "../Api/PokemonsApi";

export const FilterButtons = (props) => {
  const { typesButtons, pokemons, handleTypeBtn } = props;

  return (
    <div>
      Filter by:
      <div className="d-flex justify-content-center">
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
      </div>
    </div>
  );
};
