import React from "react";

const InvestmentField = (props) => {
  return (
    <p>
      <label htmlFor={props.InputLabel}> {props.InputLabel} ($)</label>
      <input
        onChange={(event) => {
          props.InputChangeHandler(props.InputLabel, event.target.value);
        }}
        value={props.InputValue[props.InputLabel]}
        type={props.InputType}
        id={props.InputId}
      />
    </p>
  );
};

export default InvestmentField;
