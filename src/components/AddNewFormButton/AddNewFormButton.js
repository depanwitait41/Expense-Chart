import React from 'react'

export const AddNewFormButton = (props) => {
  return (
    <button onClick={props.newExpenseInputHandler}>Add Expense</button>
  )
}
