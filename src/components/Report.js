import React, {useState, useEffect} from 'react';
import { getGitlabReportByProjectIdAndUserEmail } from '../services/ReportService'
import ReportInfo from './ReportInfo';


export default function Report({currentDate, projectName, projectUrl, projectMember, reportDetails}){
    return ( <div>
        <h4>{currentDate}</h4>
        <h5>{projectName}</h5>
        <h5>{projectUrl}</h5>
        <h5>{projectMember}</h5>
        <h5>{reportDetails}</h5>
    </div>)
    // https://www.robinwieruch.de/react-list-component
}

export function GitlabReport({projectId, authorEmail}){
    console.log('after entering gitlab method before define const')
    const [report, setReport] = useState([]);

    useEffect(function(){
        getGitlabReportByProjectIdAndUserEmail(projectId, authorEmail)
        .then(report => setReport(report))
    }, []);
    return <div>
            <Report
                currentDate = {report.currentDate}
                projectName = {report.projectName}
                projectUrl = {report.projectUrl}
                reportDetails = {report.reportDetails.map(({authorName, commitDate, details, hours, percent}) => 
                        <ReportInfo 
                            authorName = {authorName}
                            commitDate = {commitDate}
                            details = {details}
                            hours = {hours}
                            percent = {percent} />
                )}
            />
    </div>
}

