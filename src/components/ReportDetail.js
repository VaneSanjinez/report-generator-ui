import React from 'react';
import Table from 'react-bootstrap/Table';


export default function ReportDetail({commitDate, hours, details, percent}){
    let commitDateObject = JSON.stringify({commitDate}.commitDate)
    let commitDateDisplay = commitDateObject.slice(1,17)
    return ( 
            <tr >
                <td>{commitDateDisplay}</td>
                <td>{details}</td>
         </tr>
    )
}