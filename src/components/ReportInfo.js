import React from 'react';

export default function ReportInfo({authorName, commitDate, details, hours, percent}){
    return ( <div>
        <h4>{authorName}</h4>
        <h5>{commitDate}</h5>
        <span>{details}</span>
        <h5>{hours}</h5>
        <h5>{percent}</h5>
    </div>)
}