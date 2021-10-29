import React, {useState} from "react";
import {GitlabReportInfo, GitlabReportDetails} from './Report';
import ListOfMembers from "./ListOfMembers";
import ListOfMembersV2 from "./ListOfMembersV2";
import { postGitlabExportReportByProjectIdAndProjectMember } from "../services/ReportService";
import ReportDetailsHeader from "./ReportDetailsHeader";
import Table from 'react-bootstrap/Table';
import { ProjectSelection } from "./ProjectSelection";


class ReportComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      projectId: null,
      value: null,
      showDropdown: false,
      showReport: false, 
      exportReport: false,
      exportComplete: false,
      error: '',
      selectedTeamMember:'',
      memberSelected:''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value);
    this.setState({ memberSelected : event.target.value });
        this.setState({ memberSelected : event.target.value }, () => {
            console.log(`state: ${this.state.memberSelected}, value: ${event.target.value}`)}
        );
  }
  
  _showDropdown = (bool) =>{
    this.setState({
      showDropdown: bool
    });
  }

  _exportReport = (bool) =>{
    // e.preventDefault();
    this.setState({
      exportReport: bool
    })
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
       <ProjectSelection/>
       <div>
         <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter project id" required/>
         {() => {if(this.state.value != null && 
                         this.state.value != '' && this.state.value != "" && 
                         this.state.value != undefined && 
                         this.state.value.length != 1){
                              this.state.projectId = this.state.value
                        }
              }}
          <div>
            <button onClick={this._showDropdown.bind(null, true)}>Display Team members</button>   
              {this.state.showDropdown && (<ListOfMembers projectId={this.state.value}/>)}
          </div>
          <div>
          <button onClick={this._showReport.bind(null, true)}>Run Report</button>
          <br/><br/>
              {/* {this.state.showReport && (<div>
                                          <GitlabReportInfo projectId ={6853087} authorEmail = {'Nick Busey'}/>
                                          <ReportDetailsHeader/>
                                          <GitlabReportDetails projectId ={6853087} authorEmail = {'Nick Busey'}/>
                                        </div>)} */}

                  {this.state.showReport && (
                  <div>
                    <div className="classTable">
                          <Table striped bordered hover size="sm">
                                  <GitlabReportInfo projectId ={this.state.value} authorEmail = {'Nick Busey'}/>
                          </Table>
                          </div>
                            <button onClick={this._exportReport.bind(null, true)}>Export to TXT</button>
                            {this.state.exportReport && postGitlabExportReportByProjectIdAndProjectMember(6853087, 'Nick Busey')}
                          <div>
                          <Table>
                            <tbody className="tbody-gilabreportdetails">
                                  <GitlabReportDetails projectId ={this.state.value} authorEmail = {'Nick Busey'}/>
                                </tbody>
                          </Table>
                          </div>
                      </div>
                  )}
          </div>
       </div>
    </div>
    )}
}

export default ReportComponent;
//https://stackoverflow.com/questions/65209396/react-button-onclick-event-call-other-component
// https://blog.logrocket.com/a-guide-to-react-onclick-event-handlers-d411943b14dd/