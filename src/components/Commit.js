import React, {useState, useEffect} from 'react';
import { getCommitById, getCommitsByProjectId } from '../services/GitlabServices'

export default function Commit({id, authorName, authorEmail, creationDate, message, webUrl}){
    return(<div>
        <span>
            <div>Author: {authorName}</div>
            <div>Email: {authorEmail}</div>
            <div>Message: {message}</div>
        </span>
    </div>)
}

export function CommitById({projectId, commitId}){
    const [commit, setCommit] = useState([]);
    
    useEffect(function(){
        getCommitById(projectId, commitId)
        .then(commit => setCommit(commit))
    }, []);
    return <div>
        <Commit
            key = {commit.id}
            authorName = {commit.authorName}
            authorEmail = {commit.authorEmail}
            message = {commit.message}
        />
    </div>
}
