import React, {useState, useEffect} from 'react';
import { getProjectMembers } from '../services/GitlabServices';
import Select from 'react-select';
import '../styles/ReportComponent.css'

export default function ListOfMembers({projectId}){
    const [members, setMembers] = useState([]);

    useEffect(function(){
        getProjectMembers(projectId)
        .then(members => setMembers(members))
    }, []);

    const data = members.map(m => ({
        "value": m.name,
        "label": m.name
    }))

    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = e => {
        setSelectedOption(e);
      }
    
    return (<div>
        <Select
                placeholder="Select a team member"
                value={selectedOption} // set selected value
                options={data} // set list of the data
                onChange={handleChange} // assign onChange function
                className = 'react-select'
        />
        {selectedOption && <div style={{ marginTop: 20, lineHeight: '40px' }}>
        <b>Selected Option</b><br />
        <div style={{ marginTop: 10 }}><b>Label: </b> {selectedOption.label}</div>
        <div><b>Value: </b> {selectedOption.value}</div>
        {console.log(selectedOption.value)}
      </div>}
    </div>)
    //    https://www.carlrippon.com/react-drop-down-data-binding/
}