import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Directory from './components/Directory';
import Welcome from './components/Welcome';
import AddNewApp from "./components/AddNewApp";

function App() {

  const [newApp, setNewApp] = useState({
    'appName': '',
    'appOwner': '',
    'gitLink': '',
  })

  return (
    <>
      <h2>TMVS Application Documentation Portal</h2>
      <br/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/directory" element={<Directory/>}/>
          <Route path="/new" element={<AddNewApp newApp={newApp} setNewApp={setNewApp}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


// hook example

  // const [count, setCount] = useState(0)

        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}