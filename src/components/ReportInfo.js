import React from 'react';

export default function ReportInfo({projectName, projectUrl, currentDate, projectMember}){
    return ( <div>
        <h4>Project Name: {projectName}</h4>
        <h5>{projectUrl}</h5>
        <span>{projectMember}</span>
        <h5>{currentDate}</h5>
    </div>)
}