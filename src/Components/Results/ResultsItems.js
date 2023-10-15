import React from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const ResultsItems = (props) => {
  console.log(props.initialInvestment);
  return (
    <tbody>
      {props.results.map((result) => (
        <tr key={result.year}>
          <td>{result.year}</td>
          <td>{formatter.format(result.savingsEndOfYear)}</td>
          <td>{formatter.format(result.yearlyInterest)}</td>
          <td>
            {formatter.format(
              result.savingsEndOfYear -
                props.initialInvestment -
                result.yearlyContribution * result.year
            )}
          </td>
          <td>
            {formatter.format(
              props.initialInvestment + result.yearlyContribution * result.year
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ResultsItems;
