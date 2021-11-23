import React, {useState, useEffect} from 'react';
import { postGitlabExportReportByProjectIdAndProjectMember } from '../services/ReportService';


export default function ExportReport({projectId, projectMember}){
    const [exportReport, setExportReport] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(function(){
        postGitlabExportReportByProjectIdAndProjectMember(projectId, projectMember)
        .then(exportReport => setExportReport(exportReport))
        .then(loading => setLoading(loading));
    }, []);
    return <div>
                <span>Exporting project</span>
           </div>

}