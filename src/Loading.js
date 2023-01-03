import './css/FilmsWatched.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Loading() {
    let genreList = ['Romcoms','Detective Films','Anime','Dramas','YA Dystopias','Cats: The Musical','Terrible Horror Films','Oscar Bait','Your Mom','Theater']
    let colorList = ['#FF68A8', '#64CFF7', '#F7E752', '#CA7CD8', '#3968CB', '#E3826F', '#E4A9A4', '#EFBA97', '#F1CCBB', '#E7D5C7']
    const [genre,setGenre] = useState(genreList[Math.floor(Math.random() * 10)]);
    const [color,setColor] = useState(colorList[Math.floor(Math.random() * 10)]);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setGenre(genreList[Math.floor(Math.random() * 10)]);
        setColor(colorList[Math.floor(Math.random() * 10)]);
      }, 1600);
      return () => clearInterval(interval);
    }, []);


    // {`color: #${color}`

    return (
      <div className="App">
        <header className="App-header">
          <p> Loading <span style ={{color: `${color}`}} >{`${genre}`}</span>... </p>
        </header>
      </div>
    );
  }

export default Loading; // "export default" keywords specify the main component of the file