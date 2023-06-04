import '../css/FilmsWatched.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Loading() {
    let genreList = ['Romcoms', 'Anime','Dramas','Horror','Musicals','Plays']
    let colorList = ['#F4E0F4', '#D7EBAD', '#D9BFD9', '#FBD6EB', '#F6F3DC']
    const [genre,setGenre] = useState(genreList[4]);
    const [color,setColor] = useState(colorList[4]);
    
    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setGenre(genreList[index]);
        setColor(colorList[index]);
        if (index === 4){
          index = 0
        } else {
          index += 1
        }
      }, 1600);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="App">
          <header className="App-header">
            <div className= 'fade-in-animation'>
              <p> Loading <span key = {Math.random()} className = 'genre-loading'> <span style ={{color: `${color}`}} >{`${genre}`}</span>... </span> </p>
            </div>
          </header>
      </div>
    );
  }

export default Loading; // "export default" keywords specify the main component of the file