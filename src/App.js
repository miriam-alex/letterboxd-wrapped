import React from 'react';
import { useState } from 'react';

// pages
import Home from './Home';
import Directions from './Directions';
import FilmsWatched from './FilmsWatched';
import Error from './Error';
import MinutesWatched from './MinutesWatched';
import TopGenres from './TopGenres';

function App() {
  // note: a state variable’s value never changes within a render. be careful.
  // remember to avoid direct mutations to object -> replace them w new ones so the frame rerenders
  // TREAT STATE AS IMMUTABLE!
  
  const [pageIndex, setPageIndex] = useState(0);
  const [filmDataObj, setFilmDataObj] = useState(null)

  if (pageIndex === 0){
    return (
      <Home onClick={() => setPageIndex(1)}/>
    );
  } else if (pageIndex === 1){
    return (
      <Directions setPageIndex={setPageIndex}
                  setFilmDataObj={setFilmDataObj} />
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
      <Error />
    );
  }
}

export default App; // "export default" keywords specify the main component of the file