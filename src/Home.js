import './App.css';
import React from 'react';

function Home({onClick}) {
    return (
      <div className="App">
        <header className="App-header">
          <p>
          Are you a Letterboxd user <br/> with an undying need <br/> to quantify your love for film? <br/> 
          </p>
          <button className = "button" onClick = {onClick}> Absolutely. </button>
        </header>
      </div>
    );
  }

export default Home; // "export default" keywords specify the main component of the file