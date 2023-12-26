import {React, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Directory() {
    
    const navigate = useNavigate();

    return (
        <>
        <p>Greetings from the Directory Page</p>
        <button class="button" onClick={() => navigate('/new')}>Add Application</button>
        <button class="button" onClick={() => navigate('/')}>Home</button>
        </>
    )
}


export default Directory;