import React, { useState } from "react";

export const NewAbilityForm = (props) => {
  const [ability, setAbility] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (ability) {
      props.addNewAbility(ability);
      setAbility("");
    } else {
      console.log("invalid input");
    }
  };

  return (
    <div className="ability-form m-3">
      <form onSubmit={onSubmit}>
        <h6>Add a new ability:</h6>
        <div className="form-group">
          <input
            type="text"
            placeholder="ability name"
            onChange={(e) => setAbility(e.target.value)}
            value={ability}
          />
          <button className="btn btn-dark btn-sm" type="submit">
            Add new ability
          </button>
        </div>
      </form>
    </div>
  );
};
