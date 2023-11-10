import React, { useContext, useState } from "react";
import { transactionsContext } from "../ContextProvider";
import { nanoid } from "nanoid";

function NewTransaction() {
  const [transaction, setTransaction] = useState({
    name: "",
    amount: "",
    id: nanoid(),
  });
  const { dispatch } = useContext(transactionsContext);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "NEW_TRANSANCTION", payload: transaction });
    setTransaction({
      name: "",
      amount: "",
      id: nanoid(),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add new transaction</h3>
      <label htmlFor="name">Name</label>
      <input
        value={transaction.name}
        onChange={(e) =>
          setTransaction((prev) => ({ ...prev, name: e.target.value }))
        }
        type="text"
        name="name"
        placeholder="New tablet ..."
      />
      <label htmlFor="amount">Amount</label>
      <p>(negative - expense, positive - income)</p>
      <input
        value={transaction.amount}
        onChange={(e) =>
          setTransaction((prev) => ({
            ...prev,
            amount: e.target.value,
          }))
        }
        type="number"
        name="amount"
        placeholder="200"
      />
      <button>Add transaction</button>
    </form>
  );
}

export default NewTransaction;
