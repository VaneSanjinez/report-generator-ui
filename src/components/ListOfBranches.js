import React,  {useEffect, useState} from 'react'
import { getProjectBranches } from '../services/GitlabServices';
import Branch from './Branch';

export default function ListOfBranches({projectId}){
    const [branches, setBranches] = useState([]);

    useEffect(function(){
        getProjectBranches(projectId)
        .then(branches => setBranches(branches))
    }, []);
    return <div>
        {branches.map(({name, merged, webUrl}) =>
            <Branch 
                key = {name}
                name = {name}
                merged = {merged.toString()}
                webUrl = {webUrl}
            />
        )}
    </div>
}