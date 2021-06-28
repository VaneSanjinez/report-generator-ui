import React, {useState, useEffect} from 'react';
import { getGitlabReportByProjectIdAndUserEmail, getGitlabReportInfoByProjectIdAndUserEmail } from '../services/ReportService'
import ReportInfo from './ReportInfo';


export default function Report({reportInfo, reportDetails}){
    return ( <div>
        <span>{reportInfo}</span>
        <span>{reportDetails}</span>
    </div>)
    // https://www.robinwieruch.de/react-list-component
}

export function GitlabReport({projectId, authorEmail}){
    console.log('after entering gitlab method before define const');
    const [report, setReport] = useState(null);
    const [reportInfo, setReportInfo] = useState([]);
    const [reportDetails, setReportDetails] = useState([]);

    console.log("before call the method from service!")
    useEffect(function(){
        getGitlabReportByProjectIdAndUserEmail(projectId, authorEmail)
        .then(report => setReport(report))
    }, []);

 
    return <div>
            {/* TODO */}
    </div>
}

//019
export function GitlabReportInfo({projectId, authorEmail}){
    const [projectInfo, setProjectInfo] = useState([]);

    useEffect(function(){
        getGitlabReportInfoByProjectIdAndUserEmail(projectId, authorEmail)
        .then(projectInfo => setProjectInfo(projectInfo))
    }, []);
    return <div>
            <ReportInfo 
                projectName = {projectInfo.projectName}
                projectUrl = {projectInfo.projectUrl}
                currentDate = {projectInfo.currentDate}
                projectMember = {projectInfo.projectMember}
            />
    </div> 
}

