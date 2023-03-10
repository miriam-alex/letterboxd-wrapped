import '../css/FilmsWatched.css';
import '../css/App.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../components/Loading';

function TopGenres({onClick,filmDataObj}) {
    const [genreData,setGenreData] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=> {
        console.log("effected!")
        if (genreData === null){
            let genreDataObj = {}
            for (let i=0; i<filmDataObj.length; i++){
                for (let j=0; j<filmDataObj[i].Genres.length;j++){
                    let currGenre = filmDataObj[i].Genres[j].name;
                    if (genreDataObj.hasOwnProperty(currGenre)){
                        genreDataObj[currGenre] = genreDataObj[currGenre] + 1;
                        // console.log(`${currGenre} pops up ${genreDataObj[currGenre]} times!`)
                    } else {
                        genreDataObj[currGenre] = 1;
                        // console.log(`${currGenre} pops up once`)
                    }
                }
            }

            // taking top 5 genres
            let genreDataArray = Object.entries(genreDataObj).sort(function(a, b) {
                return b[1] - a[1];
            });
            setGenreData(genreDataArray);
            console.log(genreDataArray)
            
            
            setLoading(false)
        }
    });

    if (loading === false && genreData.length >= 5){
        return (
            <div className="App">
              <header className="FilmsWatched-Header">
                <h1 className = "title" >Your Top Genres </h1>
                <p>{`1. ${genreData[0][0]}`}</p>
                <p>{`2. ${genreData[1][0]}`}</p>
                <p>{`3. ${genreData[2][0]}`}</p>
                <p>{`4. ${genreData[3][0]}`}</p>
                <p>{`5. ${genreData[4][0]}`}</p> 
                
              </header>
            </div>
          );
    } else if (loading === true){
      return(
        <Loading/>
      );
    } else {
        return (
            <div className="App">
              <header className="FilmsWatched-Header">
                <p> Watch more movies! <br/>
                    We only have (a bit of) information <br/>
                    on the genres you like. </p>
              </header>
            </div>
          );
    }
  }

export default TopGenres; // "export default" keywords specify the main component of the file