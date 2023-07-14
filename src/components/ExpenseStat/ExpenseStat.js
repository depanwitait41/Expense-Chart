import React from 'react'
import Chart from '../chart/Chart'

export default function ExpenseStat(props){
    const {statData} =props;
    const chartDataPoints=[
        {label:"Jan", value: 0},
        {label:"Feb", value: 0},
        {label:"Mar", value: 0},
        {label:"Apr", value: 0},
        {label:"May", value: 0},
        {label:"Jun", value: 0},
        {label:"Jul", value: 0},
        {label:"Aug", value: 0},
        {label:"Sep", value: 0},
        {label:"Oct", value: 0},
        {label:"Nov", value: 0},
        {label:"Dec", value: 0},
    ]
    for (const entries of statData){
        const expenseMonth=entries.date.getMonth();
        chartDataPoints[expenseMonth].value +=entries.amount;
    }
  return (
    <div className='flex justify-center'><Chart datapoints={chartDataPoints}/></div>
  )
}
