import {React, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
    
    const navigate = useNavigate();

    return (
        <>
        <p>Welcome to the TMVS Application Documentation Portal.</p>
        {/* <button class="button" onClick={() => navigate('/add')}>Login</button> */}
        <button class="button" onClick={() => navigate('/directory')}>View Application List</button>
        </>
    )
}


export default Welcome;