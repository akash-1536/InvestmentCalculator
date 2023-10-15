import React, { useState } from "react";
import InvestmentInputGroup from "./InvestmentInputGroup";
import FormAction from "./FormAction";

const InputFields = [
  {
    InputLabel: "current-savings",
    InputType: "number",
    InputId1: "current-savings"
  },
  {
    InputLabel: "yearly-contribution",
    InputType: "number",
    InputId: "yearly-contribution"
  },
  {
    InputLabel: "expected-return",
    InputType: "number",
    InputId: "expected-return"
  },
  {
    InputLabel: "duration",
    InputType: "number",
    InputId: "duration"
  }
];

const initalUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 7000,
  "expected-return": 12,
  duration: 5
};

const InvestmentForm = (props) => {
  const [userInput, setUserInput] = useState(initalUserInput);

  const FormResetHandler = () => {
    setUserInput(initalUserInput);
  };
  const FormSubmitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const InputChangeHandlerFuntion = (input, value) => {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [input]: value
      };
    });
  };
  return (
    <form onSubmit={FormSubmitHandler} className="form">
      <InvestmentInputGroup
        InputLabel1={InputFields[0].InputLabel}
        InputLabel2={InputFields[1].InputLabel}
        InputType1={InputFields[0].InputType}
        InputType2={InputFields[1].InputType}
        InputId1={InputFields[0].InputId}
        InputId2={InputFields[1].InputId}
        InputChangeHandler={InputChangeHandlerFuntion}
        InputValues={userInput}
      />
      <InvestmentInputGroup
        InputLabel1={InputFields[2].InputLabel}
        InputLabel2={InputFields[3].InputLabel}
        InputType1={InputFields[2].InputType}
        InputType2={InputFields[3].InputType}
        InputId1={InputFields[2].InputId}
        InputId2={InputFields[3].InputId}
        InputChangeHandler={InputChangeHandlerFuntion}
        InputValues={userInput}
      />
      <FormAction onFormReset={FormResetHandler} />
    </form>
  );
};

export default InvestmentForm;
