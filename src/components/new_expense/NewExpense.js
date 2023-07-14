import React from "react";
import "./newExpense.css";
import ExpenseForm from "../Expense_form/ExpenseForm";

export default function NewExpense({newDataHandler}){
    return(
        <div className="new-expense">
            <ExpenseForm newDataHandler={newDataHandler} />
        </div>
    )
}