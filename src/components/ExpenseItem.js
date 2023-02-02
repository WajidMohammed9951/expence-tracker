import React, {useState} from "react";
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {

  const [newTitle, setNewTitle] = useState("");
  const [title, setTitle] = useState(props.title);


  const clickHandler = () => {
   setTitle(newTitle);

  }
  const changeHandler = (event) => {
    setNewTitle(event.target.value);
  }
  return (
    <div className="expence-item">
      <ExpenseDate date={new Date(props.date)} />
      <div className="expence-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expence-item__price">${props.amount}</div>

      <input type="text" value={newTitle} onChange = {changeHandler}/>
       
      <button onClick={clickHandler}>change title</button>
    </div>
  );
};

export default ExpenseItem;
