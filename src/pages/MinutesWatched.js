import '../css/FilmsWatched.css';
import '../css/App.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CountUp from 'react-countup';
import Loading from '../components/Loading'; 


function MinutesWatched({onClick,filmDataObj}) {
    const [minutesData,setMinutesData] = useState(null);
    const [pageState, setPageState] = useState("loading");

    useEffect(()=> {
      if (pageState === "loading") {
        console.log("minutes effected!")
        if (minutesData === null){
            let totalMinutes = 0;
            for (let i=0; i<filmDataObj.length; i++){
                totalMinutes = totalMinutes + filmDataObj[i].Runtime
            }
            setMinutesData(totalMinutes)
            setPageState("done loading");
        }
      }
    });

    console.log("minutes: " + minutesData)

    if (pageState === "done loading"){
      return (
        <div className="App">
          <header className="App-header">
          <div className= 'fade-in-animation'>
            <p> In fact, you've consumed </p>
            <div className = "counter">
              <CountUp end={minutesData} />
            </div>
            <p> minutes of film this year. </p>
            <button type="button" class="btn btn-outline-light" onClick = {onClick}> Next </button>
            </div>
          </header>
        </div>
      );
    } else {
      return (<Loading/> );
    }
    
  }

export default MinutesWatched; // "export default" keywords specify the main component of the file