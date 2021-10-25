import React, {useState, useEffect} from "react";
import { getProjectMembers } from '../services/GitlabServices';
import Select from 'react-select';
import {GitlabReportInfo, GitlabReportDetails} from './Report';
import Table from 'react-bootstrap/Table';
import { postGitlabExportReportByProjectIdAndProjectMember } from "../services/ReportService";


export default class ReportGenerator extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            projectId:6853087,
            members:[],
            memberSelected: '',
            value:'',
            showReport: false, 
            exportReport: false,
            exportComplete: false
        }
        this.handleChange = this.handleChange.bind(this);
        // this.handleInputChange = this.handleInputChange(this);
    }


    // https://www.pluralsight.com/guides/how-to-get-selected-value-from-a-mapped-select-input-in-react
    
    handleChange(e) {
        this.setState({ memberSelected : e.target.value });
        this.setState({ memberSelected : e.target.value }, () => {
            console.log(`state: ${this.state.memberSelected}, value: ${e.target.value}`)}
        );
      }

    // handleChange = evt => {
    //     const name = evt.target.name;
    //     const value =
    //     evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    //     setState({
    //       ...state,
    //       [name]: value
    //     })
    //   }
    //   https://stackoverflow.com/questions/41446560/react-setstate-not-updating-state

    _exportReport = (bool) =>{
        // e.preventDefault();
        this.setState({
          exportReport: bool
        })
      }

      _showReport = (bool) =>{
        this.setState({
          showReport: bool
        })
      }
    componentDidMount() {
        console.log('before getproject')
        getProjectMembers(this.state.projectId)
        .then(teamMembers => this.setState({members : teamMembers}));

    }
    render(){
    return <div>
        <input type="text" name= "projectId" value={this.state.projectId} onChange={this.handleChange} placeholder="Enter project id" required/>

        <br/>
        <select value={this.state.memberSelected} onChange={this.handleChange}>
            {this.state.members.map((member) => (
                <option value = {member.name}>{member.name}</option>
            ))}
        </select>
        <button onClick={this._showReport.bind(null, true)}>Run Report</button>
        {this.state.showReport && (
                  <div>
                    <div className="classTable">
                          <Table striped bordered hover size="sm">
                                  <GitlabReportInfo projectId ={this.state.projectId} authorEmail = {this.state.memberSelected}/>
                          </Table>
                        
                          </div>
                            <button onClick={this._exportReport.bind(null, true)}>Export to TXT</button>
                            {this.state.exportReport && postGitlabExportReportByProjectIdAndProjectMember(6853087, 'Nick Busey')}
                          <div>
                          <Table>
                            <tbody className="tbody-gilabreportdetails">
                                  <GitlabReportDetails projectId ={this.state.projectId} authorEmail = {this.state.memberSelected}/>
                                </tbody>
                          </Table>
                          {() => {this._showReport.bind(null, false)}}
                          {() => this.setState({showReport: false})}
                          </div>
                      </div>
                  )}

    </div>
    }
}