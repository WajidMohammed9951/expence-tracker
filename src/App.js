import React from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";



const  App = () => {
let expenses = [
  {
  id: 'e1',
  title:'school fee',
  amount:'150',
  date:'new Date(2021, 5, 12)'
},
{
  id: 'e2',
  title:'book rent',
  amount:'200',
  date:'new Date(2021, 2, 22)'
},
{
  id: 'e3',
  title:'hostel fee',
  amount:'400',
  date:'new Date(2021, 4, 2)'
},
{
  id: 'e4',
  title:'college fee',
  amount:'200',
  date:'new Date(2022, 5, 5)'
}
]
  

  return (
    <div>
         
     <NewExpense></NewExpense>
    <Expenses  item={expenses}/>
    </div>
  );
};

export default App;
