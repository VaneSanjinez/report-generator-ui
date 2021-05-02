import React,  {useEffect, useState} from 'react'
import Project from './Project'
import GitlabServices, { getAllProjects } from '../services/GitlabServices'

export default function ListOfProjects(){
    const [projects, setProjects] = useState([]);

    useEffect(function(){
        getAllProjects()
        .then(projects => setProjects(projects))
    }, []);
    return <div>
        {projects.map(({id, name, description}) =>
            <Project 
                key = {id}
                name = {name}
                description = {description}
            />
        )}
    </div>
}