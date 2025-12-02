import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useState, useEffect} from 'react'
import React from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      setJokes(res.data)
    })
    .catch((e)=>{
      console.error(e);
    })
  },[])

  return (
    <>
      <h1>First app</h1>
      <p>Jokes:{jokes.length}</p>
      {
        jokes.map((joke,index)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App;