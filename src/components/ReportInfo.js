import React from 'react';

export default function ReportInfo({projectName, projectUrl, currentDate, projectMember}){
    var currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    // document.write(utc);
    return ( <div>
                <thead>
                {/* <h4>Project Name: {projectName}</h4>
                <h5>{projectUrl}</h5>
                <span>{projectMember}</span>
                <h5>{currentDate}</h5> */}
                    <tr>
                        <th>Project Name</th>
                        <th>Project URL</th>
                        <th>Project Member</th>
                        <th>Date</th>
                    </tr>
                </thead>
                    <tr>
                        <td>{projectName}</td>
                        <td><a href={projectUrl} target="_blank">Visit Project</a></td>
                        <td>{projectMember}</td>
                        <td>{currentDate}</td>
                    </tr>
            </div>
            
             )
}