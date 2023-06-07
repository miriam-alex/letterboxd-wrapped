import '../css/Infographic.css';
import '../css/App.css';
import React from 'react';

function Infographic({topMovies, minutesData, genreData, color}) {
    //console.log(topMovies)
    //console.log(genreData)

    //{minutesData.toLocaleString("en-US")}
    //{genreData[0][0]}

    //<p className = "footer "> miriam-alex.github.io/letterboxd-wrapped/</p>

    console.log("info")
    console.log(color);
    const url = "https://image.tmdb.org/t/p/w1280" + topMovies[0].PosterPath

    if (topMovies.length >= 5){
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
                            <p>1. {topMovies[0].Name} ({topMovies[0].Year})</p>
                            <p>2. {topMovies[1].Name} ({topMovies[1].Year})</p>
                            <p>3. {topMovies[2].Name} ({topMovies[2].Year})</p>
                            <p>4. {topMovies[3].Name} ({topMovies[3].Year})</p>
                            <p>5. {topMovies[4].Name} ({topMovies[4].Year})</p>
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