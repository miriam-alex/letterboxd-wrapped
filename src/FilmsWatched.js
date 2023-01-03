import './css/FilmsWatched.css';
import './css/App.css';
import React from 'react';
import * as Constants from './Constants.js';

function FilmsWatched({onClick,filmDataObj}) {
    return (
      <div className="App">
        <header className="FilmsWatched-Header">
          <p> {`In ${Constants.YEAR}, you watched`} </p>
          <h1> {`${filmDataObj.length} films`} </h1>
          <button className = "button" onClick = {onClick}> Next </button>
        </header>
      </div>
    );
  }

export default FilmsWatched; // "export default" keywords specify the main component of the file