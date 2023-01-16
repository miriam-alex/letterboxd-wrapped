import React from 'react';
import { useState } from 'react';

// pages
import Home from './pages/Home';
import Directions from './pages/Directions';
import FilmsWatched from './pages/FilmsWatched';
import MinutesWatched from './pages/MinutesWatched';
import TopGenres from './pages/TopGenres';
import Error from './components/Error';
import Animations from './css/Animations.css'

function App() {
  // note: a state variable’s value never changes within a render. be careful.
  // remember to avoid direct mutations to object -> replace them w new ones so the frame rerenders
  // TREAT STATE AS IMMUTABLE!
  
  const [pageIndex, setPageIndex] = useState(0);
  const [filmDataObj, setFilmDataObj] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  if (pageIndex === 0){
    return (
      <Home className = 'Page-Animation' onClick={() => setPageIndex(1)}/>
    );
  } else if (pageIndex === 1){
    return (
      <Directions className = 'Page-Animation'
                  setPageIndex={setPageIndex}
                  setFilmDataObj={setFilmDataObj} 
                  setErrorMessage={setErrorMessage}/>
    );
  } else if (pageIndex === 2){
    return (
      <FilmsWatched onClick={() => setPageIndex(3)}
              filmDataObj = {filmDataObj}
      />
    );
  } else if (pageIndex === 3){
    return (
      <MinutesWatched onClick={() => setPageIndex(4)}
              filmDataObj = {filmDataObj}
      />
    );
  } else if (pageIndex === 4){
    return (
      <TopGenres onClick={() => setPageIndex(4)}
              filmDataObj = {filmDataObj}
      />
    );
  } else if (pageIndex === 'error'){
    return (
      <Error errorMessage = {errorMessage} 
              onClick = {() => setPageIndex(0)} />
    );
  }
}

export default App; // "export default" keywords specify the main component of the file