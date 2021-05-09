import React, {useState, useEffect} from 'react';
import Member from './Member'
import { getProjectMembers } from '../services/GitlabServices';

export default function ListOfMembers({projectId}){
    const [members, setMembers] = useState([]);

    useEffect(function(){
        getProjectMembers(projectId)
        .then(members => setMembers(members))
    }, []);
    return <div>
        {members.map(({id, name, username, webUrl}) =>
            <Member 
                key = {id}
                name = {name}
                username = {username}
            />
        )}
    </div>
}