import React from 'react';

export default function Member({id, name, username, webUrl}){
    return ( <div>
        <h4>{name}</h4>
        <h5>{username}</h5>
        <h5>{webUrl}</h5>
    </div>)
}