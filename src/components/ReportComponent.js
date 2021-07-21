import React from "react";
import {GitlabReportInfo, GitlabReportDetails} from './Report';


{/* <div>
          <GitlabReportInfo projectId ={250833} authorEmail = {'sazzopardi@gitlab.com'}/>
          <GitlabReportDetails projectId ={250833} authorEmail = {'sazzopardi@gitlab.com'}/>
        </div> */}

class ReportComponent extends React.Component{
    render(){
        return(<div>
        <div>
            <span>Hey</span>
          </div>
        <div>
          <GitlabReportInfo projectId ={250833} authorEmail = {'sazzopardi@gitlab.com'}/>
          <GitlabReportDetails projectId ={250833} authorEmail = {'sazzopardi@gitlab.com'}/>
        </div>
        </div>)
    }
}

export default ReportComponent;