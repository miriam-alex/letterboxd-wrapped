import '../css/Component.css';
import '../css/App.css';
import React from 'react';
import { useEffect } from 'react';
import {ReactComponent as NumberOne} from '../img/one.svg';
// import { Tooltip } from 'react-tooltip'

function MovieNumber({number, movie_slug}) {
    const url = "https://image.tmdb.org/t/p/w1280" + movie_slug

    useEffect(()=> { 

    });

    // add into image 
    // data-tooltip-id="my-tooltip-pink" data-tooltip-content="Hello world!"
    // add below img 
    // <Tooltip id="my-tooltip-pink" className="example-pink" />

    return (
      <div className="App">
        <div className = 'alignment-box'>
            <img 
                src={url}
                alt="new"
                height={300}
            />
        </div>
      </div>
    );
  }

export default MovieNumber; // "export default" keywords specify the main component of the file