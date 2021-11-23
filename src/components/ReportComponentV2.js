import React from "react";
import {GitlabReportInfo, GitlabReportDetails} from './Report';
import { postGitlabExportReportByProjectIdAndProjectMember } from "../services/ReportService";
import Table from 'react-bootstrap/Table';
import {getProjectMembers } from '../services/GitlabServices';
import $ from 'jquery';
import ExportReport from './ExportReport'


class ReportComponentV2 extends React.Component{
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
      memberSelected:'',
      members:[],
      memberSelected: '',
      loadingReport: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  //https://blog.greenroots.info/how-to-create-react-form-with-a-single-change-event-handler

  handleChange1(event) { //https://blog.greenroots.info/how-to-create-react-form-with-a-single-change-event-handler
    this.setState({projectId: event.target.value});
    console.log(this.state.value);
        this.setState({ memberSelected : event.target.value }, () => {
            console.log(`state: ${this.state.memberSelected}, value: ${event.target.value}`)}
        );
  }
  handleChange (evt) {
    const name = evt.target.name;
    const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    this.setState({
      ...this.state,
      [name]: value
    })
    console.log("name" + name + "value " + value)
  }

  _retrieveTeamMembers() {
    console.log('before getproject')
    getProjectMembers(this.state.projectId)
    .then(teamMembers => this.setState({members : teamMembers}));
    if(this.state.members != undefined) {
        return ( <select value={this.state.memberSelected} onChange={this.handleChange}>
            {this.state.members.map((member) => (
                <option value = {member.name}>{member.name}</option>
            ))}
        </select>)
    }
}
  fetch(projectId){
    var context = this;
    $.ajax({
        url: 'http://localhost:9091/gitlab/projects/' + projectId + '/members',
        method: 'GET',
        dataType: 'json',
        success: function(response) {
          context.setState({
            members: response
          });
        }
      });
    }

    displayMembers(){
      return ( 
        <select id="memberList" name="memberSelected"  value={this.state.memberSelected} onChange={this.handleChange}>
          {this.state.members.map((member) => (
              <option value = {member.name}>{member.name}</option>
          ))}
        </select>)
    }
    _exportReportComponent(project, member){
      return (
        <ExportReport projectId = {project} authorEmail = {member} />
      )
    }


  _showDropdown = (bool) =>{
    this.setState({
      showDropdown: bool
    });
  }

  _exportReport = (bool) =>{
    // e.preventDefault();
    this.setState({
      exportReport: bool,
      loadingReport: true
    })
  }

  _showReport = (bool) =>{
    this.setState({
      showReport: bool
    })
  }

  sayHello(projectid, author) {
    alert('Hello!' + author + 'this is your project' + projectid);
  }
  
  refreshPage = () => {
    window.location.reload();
  }



  render() {
    return (
     <div>
         <span>6853087</span>
       <div>
         <input type="text" 
            name="projectId" 
            value={ this.state.projectId } 
            id="inputProjectId"
           onChange={ this.handleChange } />
         {() => {if(this.state.value != null && 
                         this.state.value != '' && this.state.value != "" && 
                         this.state.value != undefined && 
                         this.state.value.length != 1){
                              // this.state.projectId = this.state.value
                        }
              }}
          <div>
            <button id="displayMembers" onClick={this.fetch.bind(this, this.state.projectId)}>Display Team members</button>
            {this.displayMembers()} 
            {/* https://www.pluralsight.com/guides/dynamically-change-state-bound-content-with-react.js-on-successful-jquery-request  */}
          </div>
          <div>
            <button id="runReport" onClick={this._showReport.bind(null, true)}>Run Report</button>
            <br/><br/>
                    {this.state.showReport &&
                      $("#inputProjectId").hide() &&
                      $("#displayMembers").hide() &&
                      $("#memberList").hide() &&
                      $("#runReport").attr("disabled",true) &&
                     (
                    <div>
                      <div className="classTable">
                            <Table striped bordered hover size="sm">
                                    <GitlabReportInfo projectId ={this.state.projectId} authorEmail = {this.state.memberSelected}/>
                            </Table>
                      </div>
                              <button id="exportReport" onClick={this._exportReport.bind(null, true)}>Export to TXT</button>
                              {this.state.exportReport &&  $("#exportReport").attr("disabled",true) && 
                              // this._exportReportComponent.bind(this.state.projectId, this.state.memberSelected)
                                 postGitlabExportReportByProjectIdAndProjectMember(this.state.projectId, this.state.memberSelected)
                                }
                      <div>
                            <Table>
                              <tbody className="tbody-gilabreportdetails">
                                    <GitlabReportDetails projectId ={this.state.projectId} authorEmail = {this.state.memberSelected}/>
                              </tbody>
                            </Table>
                      </div>
                    </div>
                    )}
        </div>
        <div>
      <button onClick={this.refreshPage}>Refresh</button>
    </div>
       </div>
    </div>
    )}
}

export default ReportComponentV2;
//https://stackoverflow.com/questions/65209396/react-button-onclick-event-call-other-component
// https://blog.logrocket.com/a-guide-to-react-onclick-event-handlers-d411943b14dd/
//  refresh https://reactgo.com/react-refresh-page/