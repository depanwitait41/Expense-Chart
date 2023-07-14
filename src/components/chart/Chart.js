import React from 'react';
import "./chart.css";
import  ChartBar  from "./ChartBar"; 
import { RandomID } from '../../utils/helper';

const Chart = (props) => {
    const dataPointValues = props.datapoints.map(dataPoint=> dataPoint.value);
    const totalMaxValue= Math.max(...dataPointValues)
  return (
    <div className='chart'>
        {props.datapoints.map(dataPoint=> ( 
            <ChartBar 
            key={RandomID}
            value={dataPoint.value}
            maxValue={totalMaxValue}
            label={dataPoint.label}

            /> ))}
    </div>
  )
}
export default Chart;