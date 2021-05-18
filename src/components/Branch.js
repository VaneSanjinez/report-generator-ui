import React, {useState, useEffect} from 'react';

export default function Branch({name, merged, webUrl}){
    return (<div>
        <h2>{name}</h2>
        <h2>{merged}</h2>
        <h2>{webUrl}</h2>
    </div>)

}