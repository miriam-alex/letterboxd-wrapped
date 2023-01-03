import './FilmsWatched.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import * as Constants from './Constants.js';

function MinutesWatched({onClick,filmDataObj}) {
    const [minutesData,setMinutesData] = useState(null);

    useEffect(()=> {
        if (minutesData === null){
            let totalMinutes = 0;
            for (let i=0; i<filmDataObj.length; i++){
                totalMinutes = totalMinutes + filmDataObj[i].runtime
            }
            setMinutesData(totalMinutes)
        }
    });

    return (
      <div className="App">
        <header className="App-header">
          <p> In fact, you consumed </p>
          <p> {`${minutesData}`} </p>
          <p> minutes of film this year. </p>
          <button className = "button" onClick = {onClick}> Next </button>
        </header>
      </div>
    );
  }

export default MinutesWatched; // "export default" keywords specify the main component of the file