import React from 'react';

export default function Project({id, description, name, webUrl}){
    // console.log({name, description})
    return ( <div>
        <h4>{name}</h4>
        <h5>{description}</h5>
    </div>)
}