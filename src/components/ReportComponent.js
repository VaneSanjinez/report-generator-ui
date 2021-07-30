import React, {useState} from "react";
import {GitlabReportInfo, GitlabReportDetails} from './Report';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import ListOfMembers from "./ListOfMembers";


class ReportComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      projectId: null,
      value: '',
      showDropdown: false
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

  render() {
    this.state.projectId = 36528
    // this.state.showDropdown=true
    return (
           <div>
             <button onClick={this._showDropdown.bind(null, true)}>Display Team members</button>
            <div>
            <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter project id"/>
          <div>
          { this.state.showDropdown && (<ListOfMembers projectId={this.state.projectId}/>) }
          </div>
        </label>
            </div>
          
        {/* <ListOfMembers projectId={this.state.projectId}></ListOfMembers> */}
    </div>
    )}
  // render(){
  //   this.state.projectId = 36528
  //   // this.state.projectId = this.state.value
  //   // this.state.projectId = 18625237
  //   // if(this.state.value =! null || this.state.value < 30000){
  //   //   this.state.projectId = 250833
  //   // }else{
  //   //   this.state.projectId = this.state.value
  //   // }
  //   if(this.state.showDropdown){
  //     return <ListOfMembers projectId={this.state.projectId}></ListOfMembers>
  //   }
  //   return(
  //     <div>
  //         <label>
  //         Name:
  //         <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter project id"/>
  //       </label>
  //       {/* <ListOfMembers projectId={this.state.projectId}></ListOfMembers> */}
  //   </div>
  //   )
  //   // <ListOfMembers projectId={this.state.projectId}/>
    
  // }
}

export default ReportComponent;