import React, {useState} from "react";
import {GitlabReportInfo, GitlabReportDetails} from './Report';
import ListOfMembers from "./ListOfMembers";
import { getProjectById } from "../services/GitlabServices";


class ReportComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      projectId: null,
      value: '',
      showDropdown: false,
      showReport: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value)
  }
  
  _showDropdown = (bool) =>{
    this.setState({
      showDropdown: bool
    });
  }

  // _showGitlabReportInfo = (projectId, authorName) =>{
  //   return (
  //     GitlabReportDetails(projectId, authorName)
  //   )
  // }
  _showReport = (bool) =>{
    this.setState({
      showReport: bool
    })
  }
  sayHello(projectid, author) {
    alert('Hello!' + author + 'this is your project' + projectid);
  }

  render() {
    return (
     <div>
       <div>
         <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter project id"/>
          <div>
            <button onClick={this._showDropdown.bind(null, true)}>Display Team members</button>
              {() => {if(this.state.value != null){
                this.state.projectId = this.state.value
              }}}
              {this.state.showDropdown && (<ListOfMembers projectId={this.state.value}/>)}
          </div>
          <div>
          <button onClick={this._showReport.bind(null, true)}>Run Report</button>
              {this.state.showReport && (<div>
                                          <GitlabReportInfo projectId ={250833} authorEmail = {'Steve Azzopardi'}/>
                                          <h1><b>Hello!</b></h1>
                                          {/* <GitlabReportDetails projectId ={250833} authorEmail = {'Steve Azzopardi'}/> */}
                                        </div>)}
          </div>
       </div>
    </div>
    )}
}

export default ReportComponent;
//https://stackoverflow.com/questions/65209396/react-button-onclick-event-call-other-component
// https://blog.logrocket.com/a-guide-to-react-onclick-event-handlers-d411943b14dd/