import React from 'react';

export default function Member({id, name, username, webUrl}){
    return ( <div>
        <h4>Member Name: {name}</h4>
        <h5>Member Usernmae: {username}</h5>
        {/* <h5>Member URL: {webUrl}</h5> */}
    </div>)
}