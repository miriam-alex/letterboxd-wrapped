import '../css/FilmsWatched.css';
import '../css/App.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import MovieNumber from '../components/MovieNumber';


function FavoriteMovies({onClick,filmDataObj}) {
    const [movieRanking,setMovieRankings] = useState(null);
    const [pageState, setPageState] = useState("loading");

    useEffect(()=> {


        //filmDataObj = filmDataObj.sort((a,b) => parseInt(a.Rating) - parseInt(b.Rating))
        filmDataObj = filmDataObj.sort((a,b) => parseFloat(b.Rating) - parseFloat(a.Rating));
        console.log(filmDataObj)
        setMovieRankings(filmDataObj)
    });

    return (
    <div className="App">
        <header className="App-header">
            <div className= 'fade-in-animation'>
                <h1 className='title'> Your Favorites </h1>
                <div className = "top-five" >
                    <MovieNumber number = {1} 
                                movie_slug={filmDataObj[0].PosterPath} />
                    <MovieNumber number = {2} 
                                movie_slug={filmDataObj[1].PosterPath} />
                    <MovieNumber number = {3} 
                                movie_slug={filmDataObj[2].PosterPath} />
                    <MovieNumber number = {4} 
                                movie_slug={filmDataObj[3].PosterPath} />
                    <MovieNumber number = {5} 
                                movie_slug={filmDataObj[4].PosterPath} />
                </div>
            </div>
        </header>
    </div>
    );
} 
    
  

export default FavoriteMovies; // "export default" keywords specify the main component of the file