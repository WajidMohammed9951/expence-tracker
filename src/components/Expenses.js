import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

const Expenses = (props) => {
  return (
    <Card>
      {props.item.map(
        (expense) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
