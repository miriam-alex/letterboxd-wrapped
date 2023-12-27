import '../css/FilmsWatched.css';
import '../css/App.css';
import '../css/Animations.css';
import React, { useState, useEffect } from "react";
import CountUp from 'react-countup';
import Loading from '../components/Loading';


function MinutesWatched({ onClick, minutesData }) {
  const [pageState, setPageState] = useState("loading");
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    if (msg === null) {
      let message = "("

      if (minutesData === 0) {
        message += "Impressive! Do you live in a jungle?"
      } else if (minutesData < 200) {
        message += "This is barely two romantic comedies."
      } else if (minutesData < 1000) {
        message += "Indulge yourself a little more."
      } else if (minutesData < 2000) {
        message += "Average."
      } else if (minutesData < 3000) {
        message += "You probably have the Oscar nominations list bookmarked."
      } else if (minutesData < 4000) {
        message += "A little worried, I think."
      } else {
        message += "Abed Nadir would be proud."
      }

      message += ")"

      setPageState("done loading");
      setMsg(message);
    }

    if (pageState === "done loading") {
      window.addEventListener("keydown", function (e) {
        if (e.key === 'Enter') {
          onClick();
        }
      })
    }

  }, [msg, pageState, minutesData, onClick]);

  if (pageState === "done loading") {
    return (
      <div className="App">
        <header className="App-header">
          <div className='fade-in-animation'>
            <div className="rem-padding">
              <p> In fact, you've consumed </p>
              <div className="counter">
                <CountUp end={minutesData} />
              </div>
              <p> minutes of film this year. </p>
              <p className='abed-nadir'> {msg} </p>
            </div>
            <button type="button" className="btn btn-outline-light" onClick={onClick}> Next </button>
          </div>
        </header>
      </div>
    );
  } else {
    return (<Loading />);
  }

}

export default MinutesWatched; // "export default" keywords specify the main component of the file