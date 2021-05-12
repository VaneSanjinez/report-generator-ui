import React,  {useEffect, useState} from 'react'
import Project from './Project'
import { getAllProjects, getProjectsByUserId } from '../services/GitlabServices'

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

export function ListOfProjectsByUserId({userId}){
    const [projects, setProjects] = useState([]); 

    useEffect(function(){
        getProjectsByUserId(userId)
        .then(project => setProjects(project))
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