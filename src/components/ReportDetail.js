import React from 'react';

export default function ReportDetail({commitDate, hours, details, percent}){
    return ( <div>
        <h4>{commitDate}</h4>
        <h5>{hours}</h5>
        <span>{details}</span>
        <h5>{percent}</h5>
    </div>)
}