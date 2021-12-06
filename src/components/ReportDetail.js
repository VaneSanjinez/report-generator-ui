import React from 'react';
import '../styles/ReportDetails.css'




export default function ReportDetail({commitDate, hours, details, percent}){
    let commitDateObject = JSON.stringify({commitDate}.commitDate)
    let commitDateComplete = commitDateObject.slice(1,17)
    let commitDateDisplay =commitDateComplete.slice(0, 10);
    let commitDateHour = commitDateComplete.slice(11, 16);
    let commitDate1 = commitDateDisplay + ' at ' + commitDateHour
    return ( 
            <tr className="row-details">
                <td className="cell-detail">{commitDate1}</td>
                <td className="cell-detail">{details}</td>
         </tr>
    )
}