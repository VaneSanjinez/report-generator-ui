import React, {useState, useEffect} from 'react';
import { getBranchByProjectId } from '../services/GitlabServices';

export default function Branch({name, merged, webUrl}){
    return (<div>
        <h2>Branch name: {name}</h2>
        <h2>Merged: {merged}</h2>
        <h2>Branch Url:{webUrl}</h2>
    </div>)

}

export function BranchById({projectId, branchName}){
    const [branch, setBranch] = useState([]);

    useEffect(function(){
        getBranchByProjectId(projectId, branchName)
        .then(branch => setBranch(branch))
    }, []);
    return <div>
            <Branch 
                key = {branch.name}
                name = {branch.name}
                merged = {branch.merged.toString()}
                webUrl = {branch.webUrl}
            />
    </div>

}