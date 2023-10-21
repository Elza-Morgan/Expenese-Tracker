import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'

function Chart(props) {
  const dataValue= props.datapoints.map(dataValue => dataValue.value);  //this is another array created to extract only the property value.
  const totalMaxValue=Math.max(...dataValue);  //we added the spread operator to pull out all the array elements and to add them as standealone arguments.


  return (
    <div className="chart">
      {props.datapoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaxValue} label={dataPoint.label}/>)}
    </div>
  );
}

export default Chart;
