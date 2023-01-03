import './css/FilmsWatched.css';
import './css/App.css';
import React from 'react';

function Error({onClick,filmDataObj}) {
    return (
      <div className="App">
        <header className="App-header">
          <p> An error has occured. Sorry T_T </p>
        </header>
      </div>
    );
  }

export default Error; // "export default" keywords specify the main component of the file