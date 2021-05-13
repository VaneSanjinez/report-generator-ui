import React,  {useEffect, useState} from 'react'
import Commit from './Commit'
import { getCommitsByProjectId } from '../services/GitlabServices'

export default function ListOfCommits({projectId}){
    const [commits, setCommits] = useState([]);

    useEffect(function(){
        getCommitsByProjectId(projectId)
        .then(commits => setCommits(commits))
    }, []);
    return <div>
        {commits.map(({id, authorName, authorEmail, creationDate, message, webUrl}) =>
            <Commit 
                key = {id}
                authorName = {authorName}
                authorEmail = {authorEmail}
                message = {message}
            />
        )}
    </div>
}