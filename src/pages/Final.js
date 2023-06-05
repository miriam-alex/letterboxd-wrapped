import '../css/FilmsWatched.css';
import '../css/App.css';
import '../css/Animations.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CountUp from 'react-countup';
import Loading from '../components/Loading'; 


function Final({onClick,filmDataObj}) {
    const [msg, setMsg] = useState("");

    useEffect(()=> {
    
    });

    return (
    <div className="App">
        <header className="App-header-3">
        <div className= 'fade-in-animation'>
        <p> Thanks for playing {"<3"} </p>
        <button type="button" class="btn btn-outline-light" onClick = {onClick}> Home </button>
        </div>
        </header>
    </div>
    );
    
    
  }

export default Final; // "export default" keywords specify the main component of the file