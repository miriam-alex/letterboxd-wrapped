import React from 'react';
import { useState } from 'react';

// pages
import Home from './pages/Home';
import Directions from './pages/Directions';
import FilmsWatched from './pages/FilmsWatched';
import MinutesWatched from './pages/MinutesWatched';
import TopGenres from './pages/TopGenres';
import ProductionMap from './pages/ProductionMap';
import Error from './components/Error';
import FavoriteMovies from './pages/FavoriteMovies';
import AboutMe from './pages/AboutMe';
import Final from './pages/Final';

function App() {
  // note: a state variable’s value never changes within a render. be careful.
  // remember to avoid direct mutations to object -> replace them w new ones so the frame rerenders
  // TREAT STATE AS IMMUTABLE!
  
  const [pageIndex, setPageIndex] = useState(0);
  const [filmDataObj, setFilmDataObj] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [minutesData, setMinutesData] = useState(null)
  const [genreData, setGenreData] = useState(null)
  const [mapData, setMapData] = useState(null)
  const [topMovies, setTopMovies] = useState(null)


  if (pageIndex === -1){
    return (
      <AboutMe onClick={() => setPageIndex(0)}/>
    );
  } else if (pageIndex === 0){
    return (
      <Home className = 'Page-Animation' 
            onClick={() => setPageIndex(1)}
            onClickInfo={() => setPageIndex(-1)}               
      />
    );
  } else if (pageIndex === 1){
    return (
      <Directions className = 'Page-Animation'
                  setPageIndex={setPageIndex}
                  setFilmDataObj={setFilmDataObj} 
                  setErrorMessage={setErrorMessage}
                  setMinutesData={setMinutesData}
                  setGenreData={setGenreData}
                  setMapData={setMapData}
                  />
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
              minutesData={minutesData}
      />
    );
  } else if (pageIndex === 4){
    return (
      <TopGenres onClick={() => setPageIndex(5)}
              genreData = {genreData}
      />
    );
  } else if (pageIndex === 5){
    return (
      <ProductionMap onClick={() => setPageIndex(6)}
                     mapData = {mapData}
      />
    );
  } else if (pageIndex === 6){
    return (
      <FavoriteMovies onClick={() => setPageIndex(7)}
              filmDataObj = {filmDataObj}
              setTopMovies = {setTopMovies}
      />
    );
  } else if (pageIndex === 7){
    return (
      <Final onClick={() => setPageIndex(0)}
              topMovies = {topMovies}
              minutesData = {minutesData}
              genreData = {genreData}
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