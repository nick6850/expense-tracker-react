import React, { useContext } from "react";
import { transactionsContext } from "../ContextProvider";

function Balance() {
  const { state } = useContext(transactionsContext);

  function calculateIncome() {
    const positiveValues = state.filter(
      (transaction) => +transaction.amount > 0
    );
    return positiveValues.reduce(
      (total, value) => total + parseInt(value.amount),
      0
    );
  }

  state.length && console.log(calculateIncome());

  return <div>Balance</div>;
}

export default Balance;
