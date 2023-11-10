import React from "react";
import { transactionsContext } from "../ContextProvider";
import { useContext } from "react";

function History() {
  const { state, dispatch } = useContext(transactionsContext);

  return (
    <div className="History">
      <h3>History</h3>
      {state.map((transaction) => (
        <div key={transaction.id}>
          <p>{transaction.name}</p>
          <p className={amount[0] === "-" ? "income" : "expense"}>
            {transaction.amount}
          </p>
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
  );
}

export default History;
