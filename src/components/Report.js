import React, {useState, useEffect} from 'react';
import { getGitlabReportByProjectIdAndUserEmail } from '../services/ReportService'
import ReportInfo from './ReportInfo';


export default function Report({currentDate, projectName, projectUrl, projectMember, reportDetails}){
   
    return ( <div>
        <h4>{currentDate}</h4>
        <h5>{projectName}</h5>
        <h5>{projectUrl}</h5>
        <h1>{projectMember}</h1>
        {/* {reportDetails.map(({authorName, commitDate, details, hours, percent}) => 
                    <ReportInfo 
                            authorName = {authorName}
                            commitDate = {commitDate}
                            details = {details}
                            hours = {hours}
                            percent = {percent} />
                )} */}
    </div>)
    // https://www.robinwieruch.de/react-list-component
}

export function GitlabReport({projectId, authorEmail}){
    console.log('after entering gitlab method before define const');
    const [loading, setLoading] = useState(false);
    const [report, setReport] = useState([]);
    console.log('before use effect');
    useEffect(function(){
        setLoading(true);
        setTimeout(() => {
            getGitlabReportByProjectIdAndUserEmail(projectId, authorEmail)
            .then(report => setReport(report))
            .finally(() => {
                setLoading(false)
            })
        }, 10);
       
    }, []);
    console.log('after use effect');
    if (loading) {
        return <p>Report data is loading...</p>;
    }

    if (Array.isArray(report.reportDetails) && report.reportDetails.length > 0) {
        console.log("1111111111111111111111122222222222222222233333333333333333")
        
    }
    return <div>
            <Report
                currentDate = {report.currentDate}
                projectName = {report.projectName}
                projectUrl = {report.projectUrl}
                reportDetails={report.reportDetails} 
                // reportDetails={report.reportDetails.map(({authorName, commitDate, details, hours, percent}) => 
                //     <ReportInfo 
                //             authorName = {authorName}
                //             commitDate = {commitDate}
                //             details = {details}
                //             hours = {hours}
                //             percent = {percent} />
                // )}
            />
    </div>

}
