import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { set } from 'mongoose';

const url = "http://localhost:3001/"
function App() {
  const [anything, setAnything] = useState("")
  const [allThings, setAllThings] = useState([])


  const handleAnything = async function () {
    const response = await axios.post(url, { anything })
    console.log(response);
    getAllThings()
  }

  const getAllThings = async () => {
    const response = await axios.get(url)
    setAllThings(response.data)
  }

  useEffect(() => {
    getAllThings()
  }, [])
  return (
    <div className='app'>
      <input type="text" value={anything} onChange={(event) => setAnything(event.target.value)} />
      <button onClick={handleAnything}>Submit</button>
      <div>
        {allThings.map(t => <div>{t.anything}</div>)}
      </div>
    </div>
  )
}

export default App;
