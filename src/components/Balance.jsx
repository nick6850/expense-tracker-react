import React, { useContext, useEffect, useState } from "react";
import { transactionsContext } from "../ContextProvider";

function Balance() {
  const { state } = useContext(transactionsContext);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [balanceTotal, setBalanceTotal] = useState(0);

  useEffect(() => {
    function calculateTotal(type) {
      const values = state.filter((transaction) =>
        type === "income"
          ? transaction.amount[0] != "-"
          : transaction.amount[0] === "-"
      );
      return values.reduce(
        (total, transaction) => total + parseFloat(transaction.amount),
        0
      );
    }

    const newIncomeTotal = calculateTotal("income");
    const newExpenseTotal = calculateTotal("expense");
    const newBalanceTotal = newIncomeTotal + newExpenseTotal;

    setIncomeTotal(newIncomeTotal);
    setExpenseTotal(newExpenseTotal);
    setBalanceTotal(newBalanceTotal);
  }, [state, incomeTotal, expenseTotal]);

  return (
    <div className="balance">
      <div className="total_balance">
        <h5>Your balance</h5>
        <h4>${balanceTotal.toFixed(2) || "0.00"}</h4>
      </div>
      <div className="income_expense">
        <div className="total_income">
          <p>Income</p>
          <p style={{ color: "green" }}>{incomeTotal.toFixed(2)}</p>
        </div>
        <div className="total_expense">
          <p>Expense</p>
          <p style={{ color: "#BE4D48" }}>{expenseTotal.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default Balance;
