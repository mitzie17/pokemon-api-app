import React from "react";

export const FilterButtons = (props) => {
  const { handleTypeBtn, buttons } = props;

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
    </div>
  );
};
