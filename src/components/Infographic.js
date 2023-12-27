import '../css/Infographic.css';
import '../css/App.css';
import React from 'react';

function Infographic({topMovies, minutesData, genreData, color}) {
    //console.log(topMovies)
    //console.log(genreData)

    //{minutesData.toLocaleString("en-US")}
    //{genreData[0][0]}

    //<p className = "footer "> miriam-alex.github.io/letterboxd-wrapped/</p>

    //console.log("info")
    //console.log(color);
    const url = "https://image.tmdb.org/t/p/w1280" + topMovies[0].PosterPath

    if (topMovies.length >= 5){

        const movieDisplayArr = [];

        for (let i=0; i<5; i++){
            movieDisplayArr.push((i+1)+". " + topMovies[i].Name + " (" + topMovies[i].Year + ")");
        }
        
        return (
            <div className="bg" style={{background: `${color}`}}>
                <h1 className = "wrapped-title" > Letterboxd Wrapped </h1>
                <div class="rectangle"></div>
                <img className = 'poster2' 
                            src={url}
                            alt={topMovies[0].Name}
                        />
                <div className = "col2">
                    <div className = 'top-movies'>
                        <h2 className = 'big-header'> Top Movies</h2>
                        <div className = 'movie-items' >
                            <p className = 'movie-item' >{movieDisplayArr[0]}</p>
                            <p className = 'movie-item' >{movieDisplayArr[1]}</p>
                            <p className = 'movie-item' >{movieDisplayArr[2]}</p>
                            <p className = 'movie-item' >{movieDisplayArr[3]}</p>
                            <p className = 'movie-item' >{movieDisplayArr[4]}</p>
                        </div>
                    </div>
    
                    <div className = 'flex'>
                        <div className = 'minutes'>
                            <p className = 'header'> Minutes</p>
                            <p className = 'item '> {minutesData.toLocaleString("en-US")} </p>
                        </div>
    
                        <div className = 'top-genre'>
                            <p className = 'header'> Top Genre </p>
                            <p className = 'item '>{genreData[0][0]} </p>
                        </div>
                    </div>
                </div>
                
    
            </div>
        );
    }
  }

export default Infographic; // "export default" keywords specify the main component of the file