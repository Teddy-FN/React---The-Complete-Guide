import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
const Expense = (props) => {

  const [
    filteredYear, setFilteredYear
  ] = useState('2020')

  const filterChangedHandler = (data) => { 
    setFilteredYear(data)
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangedHandler} selectedYears={filteredYear}/>
        {
          props.items.map((expense) => (
            <ExpenseItem
              key={expense.id} 
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
};

export default Expense;
