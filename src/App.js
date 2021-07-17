import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 299.0,
    date: new Date(2021, 20, 22),
  },
  {
    id: "e2",
    title: "Buy Macbook",
    amount: 599.0,
    date: new Date(2021, 20, 25),
  },
  {
    id: "e3",
    title: "Buy PS5",
    amount: 220.0,
    date: new Date(2021, 20, 10),
  },
  {
    id: "e4",
    title: "Buy PS2",
    amount: 100.0,
    date: new Date(2021, 20, 5),
  },
];

const App = () => {
  const [
    expenses, setExpenses
  ] = useState(DUMMY_EXPENSE)

  const addExpenseHandler = expense => {
    setExpenses(prevState => {
      return [expense, ...prevState]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
