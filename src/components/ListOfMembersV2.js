import React, {useState, useEffect} from "react";
import { getProjectMembers } from '../services/GitlabServices';


export default class ListOfMembersV2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            projectId:null,
            members:[],
            memberSelected: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    // https://www.pluralsight.com/guides/how-to-get-selected-value-from-a-mapped-select-input-in-react
    
    handleChange(e) {
        this.setState({ memberSelected : e.target.value });
        this.setState({ memberSelected : e.target.value }, () => {
            console.log(`state: ${this.state.memberSelected}, value: ${e.target.value}`)}
        );
      }
    //   https://stackoverflow.com/questions/41446560/react-setstate-not-updating-state
    componentDidMount() {
        console.log('before getproject')
        getProjectMembers(this.state.projectId)
        .then(teamMembers => this.setState({members : teamMembers}));

    }
    render(){
    return <div>
        <select value={this.state.memberSelected} onChange={this.handleChange}>
            {this.state.members.map((member) => (
                <option value = {member.name}>{member.name}</option>
            ))}
        </select>

    </div>
    }
}