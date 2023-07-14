import ExpenseChart from "./components/expense_chart/ExpenseChart";
import AddButton from "./components/addButton/AddButton";
import NewExpense from "./components/new_expense/NewExpense";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      id: "ele1",
      title: "Jio-fibre",
      amount: 2800,
      date: new Date(2019, 1, 5),
    },
    {
      id: "ele2",
      title: "Medicines",
      amount: 2000,
      date: new Date(2020, 5, 17),
    },
    {
      id: "ele3",
      title: "Hair serum",
      amount: 250,
      date: new Date(2023, 10, 23),
    },
  ]);
  const newDataHandler = (item) => {
    const newData = [...data];
    newData.push(item);
    setData(newData);
  };
  const deleteItemHandler=(index)=>{
    var decision= confirm("Delete expense from list?");
    if(decision){
      const newData=[...data];
      newData.splice(index,1);
      setData(newData);
    }
  }
  return (
    <div>
      <NewExpense newDataHandler={newDataHandler} />
      <ExpenseChart data={data} deleteItemHandler={deleteItemHandler} />
      {/* <AddButton id="addbutton">Add Expenses</AddButton> */}
      <p className="ml-8 text-slate-300">New Data will be available soon...</p>
    </div>
  );
}

export default App;
