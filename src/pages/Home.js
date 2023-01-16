import '../css/App.css';
import React from 'react';

//      old button     <button className = "button" onClick = {onClick}> Absolutely. </button>

function Home({onClick}) {
    return (
      <div className="App">
        <header className="App-header">
          <p className = "transform">
          Are you a Letterboxd user <br/> with an undying need <br/> to quantify your love for film? <br/> 
          </p>
          <button type="button" class="btn btn-outline-light" href="App.css" onClick = {onClick}> Absolutely. </button>
          
          <p className='App-bottom'>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
        </header>
      </div>
    );
  }

export default Home; // "export default" keywords specify the main component of the file