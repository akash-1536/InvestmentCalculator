import React from "react";
import InvestmentField from "./InvestmentField";

const InvestmentInputGroup = (props) => {
  return (
    <div className="input-group">
      <InvestmentField
        InputLabel={props.InputLabel1}
        InputType={props.InputType1}
        InputId={props.InputId1}
        InputChangeHandler={props.InputChangeHandler}
        InputValue={props.InputValues}
      />
      <InvestmentField
        InputLabel={props.InputLabel2}
        InputType={props.InputType2}
        InputId={props.InputId2}
        InputChangeHandler={props.InputChangeHandler}
        InputValue={props.InputValues}
      />
    </div>
  );
};

export default InvestmentInputGroup;
