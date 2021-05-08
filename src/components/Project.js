import React, {useState, useEffect} from 'react';
import { getProjectById } from '../services/GitlabServices'

export default function Project({id, description, name, webUrl}){
    return ( <div>
        <h4>{name}</h4>
        <h5>{description}</h5>
        <h5>{webUrl}</h5>
    </div>)
}

export function ProjectById({id, description, name, webUrl}){
    const [project, setProject] = useState([]);

    useEffect(function(){
        getProjectById(id)
        .then(project => setProject(project))
    }, []);
    return <div>
            <Project 
                key = {project.id}
                name = {project.name}
                description = {project.description}
                webUrl = {project.webUrl}
            />
    </div>
}