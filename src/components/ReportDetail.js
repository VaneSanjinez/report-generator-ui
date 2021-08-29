import React from 'react';

export default function ReportDetail({commitDate, hours, details, percent}){
    let date = JSON.stringify({commitDate}.commitDate)
    let date1 = date.slice(1,17)


    return ( 
    // <div>
    //     <h4>{commitDate}</h4>
    //     <h5>{hours}</h5>
    //     <span>{details}</span>
    //     <h5>{percent}</h5>
    // </div>
    <div>
    {/* <table> */}
         {/* <tr>
            <th>Commit Date</th>
            <th>Hours</th>
            <th>Details</th>
            <th>Percent</th>
        </tr> */}
        <table>
            <tr>
                <td>{date1}</td>
                {/* <td>{hours}</td> */}
                <td>{details}</td>
                {/* <td>{percent}</td> */}
            </tr>
        </table>
    {/* </table> */}
    </div>
       

    )
}