import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList'
import ExpenseChart from "./ExpenseChart";
const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (data) => {
    setFilteredYear(data);
  };

  const selectedFilterYears = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangedHandler}
          selectedYears={filteredYear}
        />
        <ExpenseChart expenses={selectedFilterYears}/>
        <ExpensesList item={selectedFilterYears}/>
      </Card>
    </div>
  );
};

export default Expense;
