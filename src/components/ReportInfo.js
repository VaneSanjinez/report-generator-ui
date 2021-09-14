import React from 'react';
import '../styles/ReportDetailsHeader.css'

export default function ReportInfo({projectName, projectUrl, currentDate, projectMember}){
    var currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    return ( 
                <thead>
                {/* <h4>Project Name: {projectName}</h4>
                <h5>{projectUrl}</h5>
                <span>{projectMember}</span>
                <h5>{currentDate}</h5> */}
                    <tr className="table-cell">
                        <th className = "thead-rep">Project Name</th>
                        <th className = "thead-rep">Project URL</th>
                        <th className = "thead-rep">Project Member</th>
                        <th className = "thead-rep">Date</th>
                    </tr>
                
                    <tr className="table-cell" >
                        <td className="table-cell">{projectName}</td>
                        <td className="table-cell"><a href={projectUrl} target="_blank">Visit Project</a></td>
                        <td className="table-cell">{projectMember}</td>
                        <td className="table-cell">{currentDate}</td>
                    </tr>
                    </thead>

            
             )
}