import React,  {useEffect, useState} from 'react'
import Commit from './Commit'
import { getCommitsByProjectId, getCommitsSinceDate, getCommitsSinceUntilDate, getCommitsUntilDate } from '../services/GitlabServices'

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
                creationDate = {creationDate}
                webUrl = {webUrl}
            />
        )}
    </div>
}
export function ListOfCommitsSinceDate({projectId, sinceDate}){
    const [commits, setCommits] = useState([]);

    useEffect(function(){
        getCommitsSinceDate(projectId, sinceDate)
            .then(commits => setCommits(commits))
    }, [])
    return <div>
        {commits.map(({id, authorName, authorEmail, creationDate, message, webUrl}) =>
            <Commit 
                key = {id}
                authorName = {authorName}
                authorEmail = {authorEmail}
                message = {message}
                creationDate = {creationDate}
                webUrl = {webUrl}
            />
        )}
    </div>
}


export function ListOfCommitsUntilDate({projectId, untilDate}){
    const [commits, setCommits] = useState([]);

    useEffect(function(){
        getCommitsUntilDate(projectId, untilDate)
            .then(commits => setCommits(commits))
    }, [])
    return <div>
        {commits.map(({id, authorName, authorEmail, creationDate, message, webUrl}) =>
            <Commit 
                key = {id}
                authorName = {authorName}
                authorEmail = {authorEmail}
                message = {message}
                creationDate = {creationDate}
                webUrl = {webUrl}
            />
        )}
    </div>
}

export function ListOfCommitsSinceUntilDates({projectId, sinceDate, untilDate}){
    const [commits, setCommits] = useState([]);

    useEffect(function(){
        getCommitsSinceUntilDate(projectId, sinceDate, untilDate)
            .then(commits => setCommits(commits))
    }, [])
    return <div>
        {commits.map(({id, authorName, authorEmail, creationDate, message, webUrl}) =>
            <Commit 
                key = {id}
                authorName = {authorName}
                authorEmail = {authorEmail}
                message = {message}
                creationDate = {creationDate}
                webUrl = {webUrl}
            />
        )}
    </div>
}