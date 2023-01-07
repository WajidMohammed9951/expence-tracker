import "./ExpenceItem.css";

import React from "react";

const ExpenceItem = (props) => {

  const month = props.date.toLocaleString('en-us',{month:'long'});
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-us',{day:'2-digit'});

  return (
    <div className="expence-item" >
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expence-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expence-item__price">${props.amount}</div>
    </div>
  );
};

export default ExpenceItem;


