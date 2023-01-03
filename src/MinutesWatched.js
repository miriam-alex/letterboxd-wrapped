import './css/FilmsWatched.css';
import './css/App.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function MinutesWatched({onClick,filmDataObj}) {
    const [minutesData,setMinutesData] = useState(null);

    useEffect(()=> {
        console.log("minutes effected!")
        if (minutesData === null){
            let totalMinutes = 0;
            for (let i=0; i<filmDataObj.length; i++){
                totalMinutes = totalMinutes + filmDataObj[i].Runtime
            }
            setMinutesData(totalMinutes.toLocaleString("en-US"))
        }
    });

    return (
      <div className="App">
        <header className="App-header">
          <p> In fact, you consumed </p>
          <h1> {`${minutesData}`} </h1>
          <p> minutes of film this year. </p>
          <button className = "button" onClick = {onClick}> Next </button>
        </header>
      </div>
    );
  }

export default MinutesWatched; // "export default" keywords specify the main component of the file