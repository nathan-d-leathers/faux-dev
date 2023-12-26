import {React, useEffect, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

function AddNewApp({newApp, setNewApp}) {
    
    const navigate = useNavigate();
    const nameRef = useRef()
    const ownerRef = useRef()
    const gitRef = useRef()
    const [submitted, setSubmitted] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault();
        setNewApp({
            'appName': nameRef.current.value,
            'appOwner': ownerRef.current.value,
            'gitLink': gitRef.current.value
        })
        console.log(newApp)
        if (nameRef.current.value !== '') {
            setSubmitted(true)
            nameRef.current.value = null
            ownerRef.current.value = null
            gitRef.current.value = null
        }
        // navigate("../")
    };


    return (
        <>
        <h1>Fill out this form</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Application Name:
                <input 
                type="text"
                ref={nameRef}
                required
                />
            </label>
            <br/>
            <label>
                Application Owner:
                <input 
                type="text"
                ref={ownerRef}
                required
                />
            </label>
            <br/>
            <label>
                Github Link:
                <input 
                type="text"
                ref={gitRef}
                required
                />
            </label>
            <br/>
            <input type='submit'/>
        </form>
        {/* <button class="button" onClick={() => navigate('/')} type="submit">Submit</button> */}
        {submitted && (
            <div>
                <p>latest app added: {newApp.appName}, which is owned by {newApp.appOwner} at {newApp.gitLink}</p>
            </div>
        )}
        <br/>
        <button class="button" onClick={() => navigate('/')}>Home</button>
        </>
    )
}


export default AddNewApp;