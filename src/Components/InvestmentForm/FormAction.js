import React from "react";
import Action from "./Action";

const FormAction = (props) => {
  const resetHandler = () => {
    console.log("Inside reset Handler");
    props.onFormReset();
  };
  return (
    <p className="actions">
      <Action
        ActionType="reset"
        ActionClass="buttonAlt"
        ActionName="Reset"
        onClickAction={resetHandler}
      />
      <Action ActionType="submit" ActionClass="button" ActionName="Calculate" />
    </p>
  );
};

export default FormAction;
