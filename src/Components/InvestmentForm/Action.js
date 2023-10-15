import React from "react";

const Action = (props) => {
  const onChangeHandler = (event) => {
    //console.log(`Hi ${props.ActionName}`);
    if (props.ActionName === "Reset") props.onClickAction();
  };
  return (
    <button
      //change type to ActionType
      type={props.ActionType}
      className={props.ActionClass}
      onClick={onChangeHandler}
    >
      {props.ActionName}
    </button>
  );
};

export default Action;
