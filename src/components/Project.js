import React, {useState, useEffect} from 'react';
import { getProjectById } from '../services/GitlabServices'

export default function Project({id, description, name, webUrl}){
    return ( <div>
        <h4>Project Name: {name}</h4>
        <h5>Project Description: {description}</h5>
    </div>)
}

// export function ProjectById({id, description, name, webUrl}){
export function ProjectById({id}){
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