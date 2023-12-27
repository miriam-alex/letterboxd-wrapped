import '../css/FilmsWatched.css';
import '../css/App.css';
import '../css/Animations.css';

import React from 'react';
import { useEffect } from 'react';


function FilmsWatched({onClick,filmDataObj}) {
    useEffect(()=> {
      window.addEventListener("keydown", function (e) {
        if (e.key === 'Enter') {
          onClick();
        }
      })
    });

    return (
      <div className="App">
        <header className="films-watched-header">
        <div className= 'fade-in-animation'>
          <p> {`In ${(new Date()).getFullYear()}, you watched`} </p>
          <h1> {`${filmDataObj.length} films`} </h1>
          
          <button type="button" className="btn btn-outline-light" href = '../css/FilmsWatched.css' onClick = {onClick}> Next </button>
          </div>
        </header>
      </div>
    );
  }

export default FilmsWatched; // "export default" keywords specify the main component of the file