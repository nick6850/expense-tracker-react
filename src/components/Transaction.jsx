import React, { useContext } from "react";
import { transactionsContext } from "../ContextProvider";

function Transaction({ transaction }) {
  const { name, amount, id } = transaction;
  const sign = amount[0] === "-" ? "-" : "+";
  const { dispatch } = useContext(transactionsContext);

  return (
    <div
      className={`transaction ${
        transaction.amount[0] === "-" ? "expense" : "income"
      }`}
    >
      <p className="transaction_name">{name}</p>
      <p>
        {sign}${amount.split("-").slice(-1)}
      </p>
      <button
        className="delete_btn"
        onClick={() =>
          dispatch({
            type: "DELETE_TRANSACTION",
            payload: id,
          })
        }
      >
        X
      </button>
    </div>
  );
}

export default Transaction;
