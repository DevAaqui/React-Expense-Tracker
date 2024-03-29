import React from "react";

import './Chart.css'
import ChartBar from "./Chartbar";

const Chart = (props)=> {
    console.log('In Chart', props.dataPoints)

    const dataPointValues = props.dataPoints.map(dataPoint=> dataPoint.value)
    
    const totalMaximum = Math.max(...dataPointValues)

    return <div className="chart">
        {props.dataPoints.map((dataPoint)=> {
           return <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />
        })}
    </div>
}

export default Chart