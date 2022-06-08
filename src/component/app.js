import React, { useState, useEffect }  from "react";
import { Routes, Route } from 'react-router-dom';
import './app.css';

import Header from "./header";
import Library from "./library";
import Playlist from "./playlist";
import Error from "./error";


export default function App() {
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => setCounter(counter + 1), 1000);
    localStorage.setItem('timer', counter)
    return () => clearInterval(timer);
  });
  
  //background from https://bgjar.com/
  return (
      <main className="main" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/background.svg'})`   }}>
        <Header/>
        <Routes>
            <Route path="/" element={<Library/>} exact />
            <Route path="/playlist" element={<Playlist/>} />
            <Route element={<Error/>} />
        </Routes>
      </main>
  )
}