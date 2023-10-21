import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensisList";
import ExpensesChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");


  const onChangerFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpnesesYear = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  });



  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={onChangerFilterHandler}
        date={filteredYear}
      />
      <ExpensesChart   expenses={filteredExpnesesYear}/>
      <ExpensesList items={filteredExpnesesYear} />
    </Card>
  );
}

export default Expenses;
