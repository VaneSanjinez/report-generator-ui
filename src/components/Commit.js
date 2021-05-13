import React, {useState, useEffect} from 'react';
import { getCommitsByProjectId } from '../services/GitlabServices'

export default function Commit({id, authorName, authorEmail, creationDate, message, webUrl}){
    return(<div>
        <span>
            <div>Author: {authorName}</div>
            <div>Email: {authorEmail}</div>
            <div>Message: {message}</div>
        </span>
    </div>)
}