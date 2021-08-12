import React from 'react';

export default function ReportInfo({projectName, projectUrl, currentDate, projectMember}){
    return ( <div>
                {/* <h4>Project Name: {projectName}</h4>
                <h5>{projectUrl}</h5>
                <span>{projectMember}</span>
                <h5>{currentDate}</h5> */}
             <tr>
             <th>Project Name</th>
             <th>Project URL</th>
             <th>Project Member</th>
             </tr>
             <tr>
                 <td>{projectName}</td>
                 <td>{projectUrl}</td>
                 <td>{projectMember}</td>
             </tr>
             </div>)
}