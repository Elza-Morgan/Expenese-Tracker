import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false); // This state is used as a flag to store the boolena value, in order to know we clicked or not

  const NewExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onExpense(expenseData);
    setIsEditing(false);
  };

  const clickedNewExpensehandler = () => {
    setIsEditing(true);
  };

  const stopEiditnghandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onSaveExpenseData={NewExpenseDataHandler}
          onCancle={stopEiditnghandler}
        />
      ) : (
        <button onClick={clickedNewExpensehandler}>Add New Expense</button> //this shows the adding new expense form
      )}
    </div>
  );
};

export default NewExpense;
