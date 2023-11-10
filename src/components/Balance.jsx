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
          ? transaction.amount[0] === "-"
          : transaction.amount[0] != "-"
      );
      return values.reduce(
        (total, transaction) => total + parseInt(transaction.amount),
        0
      );
    }

    const newIncomeTotal = calculateTotal("income");
    const newExpenseTotal = calculateTotal("expense");
    const newBalanceTotal = newIncomeTotal + newExpenseTotal;

    setIncomeTotal(newIncomeTotal);
    setExpenseTotal(newExpenseTotal);
    setBalanceTotal(newBalanceTotal);
  }, [state]);

  return (
    <div className="balance">
      <div className="total_balance">
        <h4>Your balance ${balanceTotal}</h4>
      </div>
      <div className="income_expense">
        <p>Income {incomeTotal}</p>
        <p>Expense {expenseTotal}</p>
      </div>
    </div>
  );
}

export default Balance;
