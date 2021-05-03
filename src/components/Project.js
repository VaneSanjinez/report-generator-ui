import React, {useState, useEffect} from 'react';
import { getProjectById } from '../services/GitlabServices'

export default function Project({id, description, name, webUrl}){
    return ( <div>
        <h4>{name}</h4>
        <h5>{description}</h5>
    </div>)
}

export function ProjectById({id, description, name, webUrl}){
    const {projectId} = id
    console.log('before calling service')
    getProjectById(id)
    return (<div>
        <h4>{name}</h4>
        <h5>{description}</h5>
    </div>)
}