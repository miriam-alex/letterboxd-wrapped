import '../css/FilmsWatched.css';
import '../css/App.css';
import '../css/Animations.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import MovieNumber from '../components/MovieNumber';


function FavoriteMovies({onClick,filmDataObj}) {
    const [pageState, setPageState] = useState("loading");
    const [canLoad, setCanLoad] = useState(true)

    useEffect(()=> {
        if (pageState === "loading"){
            filmDataObj = filmDataObj.sort((a,b) => parseFloat(b.Rating) - parseFloat(a.Rating));
            //console.log(filmDataObj)
            if (filmDataObj.length < 5){
                setCanLoad(false);
            }
            setPageState("done")
        }
    });

    if (pageState === "loading"){
        return (
            <div className="App">
                <header className="App-header-2">
                    <div className= 'fade-in-animation'>
                        <h1 className='favorite-movies-title'> All that being said, these were your favorites of {(new Date()).getFullYear()}. </h1>
                    </div>
                </header>
            </div>
        );
    } else if (!canLoad){
        return (
            <div className="App">
                <header className="App-header-2">
                    <div className= 'fade-in-animation'>
                        <h1 className='favorite-movies-title'> All that being said, I'm begging you to watch something. Anything! </h1>
                        <button type="button" class="btn btn-outline-light" href = '../css/FilmsWatched.css' onClick = {onClick}> Next </button>
                    </div>
                </header>
            </div>
        );
    } else {
        return (
            <div className="App">
                <header className="App-header-2">
                    <div className= 'fade-in-animation'>
                        <h1 className='favorite-movies-title'> All that being said, these were your favorites of {(new Date()).getFullYear()}. </h1>
                        <div className = "top-five" >
                            <MovieNumber title = {filmDataObj[0].Name}
                                        image_slug={filmDataObj[0].PosterPath} 
                                        rating = {filmDataObj[0].Rating}
                                        lb_url = {filmDataObj[0]['Letterboxd URI']}
                                        />
                            <MovieNumber title = {filmDataObj[1].Name}
                                        image_slug={filmDataObj[1].PosterPath}
                                        rating = {filmDataObj[1].Rating}
                                        lb_url = {filmDataObj[1]['Letterboxd URI']}
                                        />
                            <MovieNumber title = {filmDataObj[2].Name}
                                        image_slug={filmDataObj[2].PosterPath} 
                                        rating = {filmDataObj[2].Rating}
                                        lb_url = {filmDataObj[2]['Letterboxd URI']}
                                        />
                            <MovieNumber title = {filmDataObj[3].Name}
                                        image_slug={filmDataObj[3].PosterPath}
                                        rating = {filmDataObj[3].Rating} 
                                        lb_url = {filmDataObj[3]['Letterboxd URI']}
                                        />
                            <MovieNumber title = {filmDataObj[4].Name}
                                        image_slug={filmDataObj[4].PosterPath} 
                                        rating = {filmDataObj[4].Rating}
                                        lb_url = {filmDataObj[4]['Letterboxd URI']}
                                        />
                        </div>
                        <button type="button" class="btn btn-outline-light" href = '../css/FilmsWatched.css' onClick = {onClick}> Next </button>
                    </div>
                </header>
            </div>
        );
    }
} 
    
  

export default FavoriteMovies; // "export default" keywords specify the main component of the file