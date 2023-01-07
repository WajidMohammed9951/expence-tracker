import React from "react";
import ExpenceItem from "./components/ExpenceItem";

const  App = () => {
let expences = [
  {
  id: 'e1',
  title:'school fee',
  amount:'300',
  date:'new Date(2022, 4, 1)'
},
{
  id: 'e2',
  title:'book rent',
  amount:'400',
  date:'new Date(2022, 5, 2)'
},
{
  id: 'e3',
  title:'hostel fee',
  amount:'500',
  date:'new Date(2022, 6, 3)'
},
{
  id: 'e4',
  title:'college fee',
  amount:'600',
  date:'new Date(2022, 7, 4)'
}
]
  

  return (
    <div>
      <ExpenceItem
        date={expences[0].date}
        title={expences[0].title}
        amount={expences[0].amount}>
      </ExpenceItem>

      <ExpenceItem
        date={expences[1].date}
        title={expences[1].title}
        amount={expences[1].date}>
      </ExpenceItem>

      <ExpenceItem
        date={expences[2].date}
        title={expences[2].title}
        amount={expences[2].date}>
        </ExpenceItem>

      <ExpenceItem
        date={expences[3].date}
        title={expences[3].title}
        amount={expences[3].date}>
      </ExpenceItem>

    </div>
  );
};

export default App;
