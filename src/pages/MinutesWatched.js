import '../css/FilmsWatched.css';
import '../css/App.css';
import '../css/Animations.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CountUp from 'react-countup';
import Loading from '../components/Loading'; 


function MinutesWatched({onClick,filmDataObj}) {
    const [minutesData,setMinutesData] = useState(null);
    const [pageState, setPageState] = useState("loading");
    const [msg, setMsg] = useState("");

    useEffect(()=> {
      if (minutesData === null){
          let totalMinutes = 0;
          for (let i=0; i<filmDataObj.length; i++){
              totalMinutes = totalMinutes + filmDataObj[i].Runtime
          }

          let message = "("

          if (totalMinutes === 0){
            message += "Impressive! Do you live in a jungle?"
          } else if (totalMinutes < 200){
            message += "This is barely two romantic comedies."  
          } else if (totalMinutes < 1000){
            message += "Indulge yourself a little more."  
          } else if (totalMinutes < 2000) {
            message += "Average."  
          } else if (totalMinutes < 3000) {
            message += "You probably have the Oscar nominations list bookmarked."  
          } else if (totalMinutes < 4000) {
            message += "A little worried, I think."  
          } else {
            message += "Abed Nadir would be proud."
          }

          message += ")"

          setMinutesData(totalMinutes)
          setPageState("done loading");
          setMsg(message);
      }
    });

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
            <p className='abed-nadir'> {msg} </p>
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