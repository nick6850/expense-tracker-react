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
      <h4>Add new transaction</h4>
      <label htmlFor="name">Name</label>
      <input
        value={transaction.name}
        onChange={(e) =>
          setTransaction((prev) => ({ ...prev, name: e.target.value }))
        }
        type="text"
        name="name"
        placeholder="New tablet"
        required
      />
      <label htmlFor="amount">Amount</label>
      <p style={{ fontSize: "10px" }}>
        (negative - expense, positive - income)
      </p>
      <input
        value={transaction.amount}
        onChange={(e) =>
          setTransaction((prev) => ({
            ...prev,
            amount: e.target.value,
          }))
        }
        type="text"
        name="amount"
        placeholder="200"
        pattern="[0-9]*\.?[0-9]*"
        inputMode="numeric"
        required
      />
      <button className="addTransactionBtn">Add transaction</button>
    </form>
  );
}

export default NewTransaction;
