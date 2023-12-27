import '../css/FilmsWatched.css';
import '../css/App.css';
import '../css/Animations.css';
import React, {useEffect} from "react"


function AboutMe({onClick}) {

    const url = "https://github.com/miriam-alex/letterboxd-wrapped"

    useEffect(()=> {
      window.addEventListener("keydown", function (e) {
        if (e.key === 'Enter') {
          onClick();
        }
      })
    });

    return (
      <div className="App">
        <header className="App-header">
        <div className= 'fade-in-animation'>
              <p> About </p>
              <div className='about-me-paragraph'>
              <p>
                  Letterboxd Wrapped provides users yearly statistics on their usage of the website, Letterboxd, via
              access to the TMDB API. This was created by Miriam Alex. 
              To view the source code, click <a href={url} target="_blank" rel="noopener noreferrer"> here</a>. 
              To see what she is up to, visit her <a href="https://twitter.com/miriamcore_" target="_blank" rel="noopener noreferrer"> Twitter account</a>. Have a lovely day.
              </p>
              </div>
          <button type="button" class="btn btn-outline-light" onClick = {onClick}> Back </button>
          </div>
        </header>
      </div>
    );
  
    
  }

export default AboutMe; // "export default" keywords specify the main component of the file