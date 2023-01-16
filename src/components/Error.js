import '../css/FilmsWatched.css';
import '../css/App.css';
import React from 'react';

function Error({errorMessage, onClick}) {
    return (
      <div className="App">
        <header className="App-header">
          <p className='App-body'> {`${errorMessage}`} </p>
          <button type="button" class="btn btn-outline-light" onClick = {onClick}> Return </button>
        </header>
      </div>
    );
  }

export default Error; // "export default" keywords specify the main component of the file