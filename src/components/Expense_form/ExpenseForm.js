import React, {useState} from "react";
import "./expense-form.css";
import { RandomID } from "../../utils/helper";
import { AddNewFormButton } from "../AddNewFormButton/AddNewFormButton";

 export default function ExpenseForm({newDataHandler}){
    const [createTitle, setCreateTitle]=useState('');
    const [createAmount,setCreateAmount]=useState('');
    const [createDate, setCreateDate]=useState('');
    const[showForm,setShowForm]=useState(false)

    const newExpenseInputHandler=()=>{
        console.log(showForm);
        setShowForm(true);
    }

    const inputChangeHandler=(identifier, value)=>{
        if(identifier==="title"){
            setCreateTitle(value);   
        }
        else if(identifier==="amount"){
            setCreateAmount(value);   
        }
        else if (identifier==="date"){
            setCreateDate(value);   
        }
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const newExpenseData={
            title: createTitle,
            amount: +createAmount,
            date:new Date(createDate),
            id: RandomID(),
        }
        newDataHandler(newExpenseData);
        setCreateAmount('');
        setCreateDate('');
        setCreateTitle('');
        setShowForm(false)
    }

    const cancelSubmissionHandler=()=>{
        setShowForm(false);
    }


    let newInputButton=<AddNewFormButton newExpenseInputHandler={newExpenseInputHandler}/>
    if(showForm){
        console.log(showForm);
        newInputButton=<div>
        <form onSubmit={submitHandler}>
              <div className="new-expense__controls">
              <div className="new-expense__control">
                <label>Title</label>
                <input className="text-slate-950"
                type="text" 
                value={createTitle}
                onChange={(event)=>inputChangeHandler('title',event.target.value)}/>
              </div>
              <div className="new-expense__control">
                <label>Amount</label>
                <input className="text-slate-950"
                type="number" 
                min="5" 
                value={createAmount}
                onChange={(event)=>inputChangeHandler('amount',event.target.value)}/>
              </div>
              <div className="new-expense__control">
                <label>Date</label>
                <input className="text-slate-950"
                type="date" 
                min="2014-01-01" 
                max="2025-12-31" 
                value={createDate}
                onChange={(event)=>inputChangeHandler('date',event.target.value)}/>
              </div>
              </div>
              <div className="flex justify-end p-[50px]">
                <button onClick={cancelSubmissionHandler}>Cancel</button>
                <button type="submit">Submit</button>
              </div>
            </form>
            </div>
    }

    return(
        <div>
            {newInputButton}
        </div>
    );
 }