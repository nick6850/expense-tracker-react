import React, { useState } from "react";
import { transactionsContext } from "../ContextProvider";
import { useContext } from "react";
import Transaction from "./Transaction";

function History() {
  const { state, dispatch } = useContext(transactionsContext);

  return state.length === 0 ? (
    <div className="history">
      <h5>History</h5>
      <h6>No transactions yet ...</h6>
    </div>
  ) : (
    <div className="history">
      <h5>History</h5>
      {state.map((transaction) => (
        <div key={transaction.id}>
          <Transaction transaction={transaction} />
        </div>
      ))}
    </div>
  );
}

export default History;
