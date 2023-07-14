import "./ExpenseItem.css";
import { useState } from "react";
import ExpenseDate from "../expense_date/ExpenseDate";
import { Card } from "../card/Card";
import { Delete_icon } from "../../assets/icons/delete_icon";
import { Edit_icon } from "../../assets/icons/edit_icon";
function Expenses(props) {
  console.log(props.title)
  const [title,setTitle]= useState(props.title)
  const titleHandler=()=>{
    setTitle("Changed");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate dates={props.purchase_date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <Card className="expense-item__price">{props.amount}/- </Card>
      <div onClick={titleHandler}><Edit_icon/></div>
      <div onClick={props.deleteItemHandler}><Delete_icon/></div>
    </Card>
  );
}

export default Expenses;
