import React, { createContext, useReducer } from "react";

export const transactionsContext = createContext([]);

const transactionReducer = (state, action) => {
  switch (action.type) {
    case "NEW_TRANSANCTION":
      return [...state, action.payload];
    case "DELETE_TRANSACTION":
      return state.filter((transaction) => transaction.id != action.payload);
    default:
      return state;
  }
};

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(transactionReducer, []);

  return (
    <transactionsContext.Provider value={{ state, dispatch }}>
      {children}
    </transactionsContext.Provider>
  );
}
