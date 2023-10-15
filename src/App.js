import React, { useState } from "react";
import Header from "./Components/Header";
import InvestmentForm from "./Components/InvestmentForm/InvestmentForm";
import Results from "./Components/Results/Results";

function App() {
  const [results, setResults] = useState(null);
  const [initialInvestment, setInitialInvestment] = useState(+10000);

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    setInitialInvestment(currentSavings);
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }
    setResults(yearlyData);
  };

  return (
    <div>
      <Header />
      <InvestmentForm onCalculate={calculateHandler} />
      {!results && (
        <p style={{ textAlign: "center" }}> No Investment Made yet </p>
      )}
      {results && (
        <Results results={results} initialInvestment={initialInvestment} />
      )}
    </div>
  );
}

export default App;
