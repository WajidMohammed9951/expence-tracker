import React from "react";
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
  return (
    <div className="expence-item">
      <ExpenseDate date={new Date(props.date)} />
      <div className="expence-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expence-item__price">${props.amount}</div>
    </div>
  );
};

export default ExpenseItem;
