import React from "react";
import Button from "react-bootstrap/Button";

export const FilterButtons = (props) => {
  const { handleTypeBtn, buttons } = props;

  const buttonColorChange = (button) => {
    if (button === "Water") {
      return "primary";
    } else if (button === "Fire") {
      return "danger";
    } else if (button === "Grass") {
      return "success";
    } else if (button === "Electric") {
      return "warning";
    } else if (button === "Ice") {
      return "info";
    } else if (button === "Normal") {
      return "secondary";
    } else {
      return "dark";
    }
  };

  return (
    <div className="container-buttons">
      <h5>Filter by type:</h5>
      <div className="type-buttons">
        {props.buttons.map((button, index) => {
          return (
            <Button
              variant={buttonColorChange(button)}
              key={index}
              value={button}
              onClick={props.handleTypeBtn}
            >
              {button}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
