import React from "react";
import { transactionsContext } from "../ContextProvider";
import { useContext } from "react";

function History() {
  const { state } = useContext(transactionsContext);

  return (
    <div className="History">
      <h3>History</h3>
      {state.map((transaction) => (
        <div key={transaction.id}>
          {transaction.name}
          {transaction.amount}
        </div>
      ))}
    </div>
  );
}

export default History;
