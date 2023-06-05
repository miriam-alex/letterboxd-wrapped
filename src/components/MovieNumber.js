import '../css/Component.css';
import '../css/App.css';
import React from 'react';
import { useEffect } from 'react';

function MovieNumber({title, image_slug, rating, lb_url}) {
    const url = "https://image.tmdb.org/t/p/w1280" + image_slug
    const altText = "Film poster of " + title

    let stars = ""

    for (let i=0; i<parseInt(rating);i++){
      stars += "★";
    }

    if (rating%1 !== 0){
      stars += " 1/2"
    }

    useEffect(()=> { 

    });

    // add into image 
    // data-tooltip-id="my-tooltip-pink" data-tooltip-content="Hello world!"
    // add below img 
    // <Tooltip id="my-tooltip-pink" className="example-pink" />

    return (
      <div className="App">
        <div className = 'alignment-box'>
          <a href={lb_url} target="_blank" rel="noopener noreferrer">
            <img className = 'poster' 
                    src={url}
                    alt={altText}
                    height={300}
                />
          </a> 
        </div>
        <p className = 'caption' > Your Rating: {stars}</p>
      </div>
    );
  }

export default MovieNumber; // "export default" keywords specify the main component of the file