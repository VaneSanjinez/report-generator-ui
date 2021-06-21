import React, { useEffect, useState } from 'react';
import { getUserByEmail } from '../services/GitlabServices';

export default function User({id, name, userName}){
    return ( <div>
        <h4>{id}</h4>
        <h5>{name}</h5>
        <span>{userName}</span>
    </div>)
}

export function UserByEmail(email){
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(function(){
        getUserByEmail(email)
        .then(user => setUser(user))
        .finally(() => {
            setLoading(false)
        })
        .catch(console.error())
    }, []);
    if (loading) {
        return <p>User data is loading...</p>;
    }
    return <div>
        <User 
            key={user.id}
            name = {user.name}
            userName = {user.userName}
        />
    </div>
}