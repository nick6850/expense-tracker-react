import React from "react";
import { transactionsContext } from "../ContextProvider";
import { useContext } from "react";

function History() {
  const { state, dispatch } = useContext(transactionsContext);

  return (
    state.length > 0 && (
      <div className="history">
        <h5>History</h5>
        {state.map((transaction) => (
          <div
            className={`transaction ${
              transaction.amount[0] === "-" ? "expense" : "income"
            }`}
            key={transaction.id}
          >
            <p className="transaction_name">{transaction.name}</p>
            <p>{transaction.amount}</p>
            <button
              onClick={() =>
                dispatch({
                  type: "DELETE_TRANSACTION",
                  payload: transaction.id,
                })
              }
            >
              X
            </button>
          </div>
        ))}
      </div>
    )
  );
}

export default History;
