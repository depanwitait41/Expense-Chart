import Expenses from "../expense_item/ExpenseItem";
import "./ExpenseChart.css";
import { Card } from "../card/Card";
import { useState } from "react";
import Filter from "../filters/Filters";
import ExpenseStat from "../ExpenseStat/ExpenseStat";
export default function ExpenseChart(props) {

  //const ongoingYear= new Date().getFullYear();
  const {data, deleteItemHandler}=props;
  const[filteredYear, setFilteredYear]=useState("0")
  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear.target.value);
  }

  const filteredExpenses = filteredYear==0 ? data :
  data.filter(item=>filteredYear===item.date.getFullYear().toString());

  let filteredContent= <p 
  className="m-2 p-2 text-slate-300/70 text-center text-2xl font-medium"
  >
  No expenses found
  </p>
   
  if(filteredExpenses.length > 0){
    filteredContent=filteredExpenses.map((item,index)=>(
      <Expenses deleteItemHandler={()=>deleteItemHandler(index)}
      key={item.id}
      title={item.title}
      amount={item.amount}
      purchase_date={item.date}
    />
    ))
  }


  return (
    <div>  
     <Card className="expenseChart colorCard">
     <ExpenseStat statData={filteredExpenses}/>
     <li className="list-[none] m-8">
      <Filter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {filteredContent}   
      </li>   
     </Card>
    
    </div>
  );
}
//(item)=>filteredYear==item.date.getFullYear()