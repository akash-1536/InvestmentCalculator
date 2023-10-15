import React from "react";
import ResultsItems from "./ResultsItems";

const Results = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <ResultsItems
        results={props.results}
        initialInvestment={props.initialInvestment}
      />
    </table>
  );
};

export default Results;
