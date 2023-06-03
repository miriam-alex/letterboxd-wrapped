import '../css/FilmsWatched.css';
import '../css/App.css';
import React, { useState, useEffect, useCallback } from "react";
import Loading from '../components/Loading';


function TopGenres({onClick,filmDataObj}) {
    const [genreData,setGenreData] = useState(null);
    const [loading,setLoading] = useState(true);

    const data = [
      {
        genre: "Unpop1",
        value: 4000
      },
      {
        genre: "Unpop2",
        value: 3000
      },
      {
        genre: "Unpop3",
        value: 2000
      },
      {
        genre: "Unpop4",
        value: 2780
      },
      {
        genre: "Unpop5",
        value: 1890
      }
    ];

    const [data2,setData2] = useState(data);

    useEffect(()=> {
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

            let count = 0;

            console.log("GENRE DATA")
            setGenreData(genreDataArray);
            console.log(genreDataArray[0][0])

            console.log("------")
            for (var i = 0; i < data.length; i++) {
              data[i].genre = genreDataArray[i][0];
              data[i].uv = genreDataArray[i][1];
          }

            console.log(data)
            console.log("------")
            setData2(data);

            
            
            setLoading(false)
        }
    });

    if (loading === false && genreData.length >= 5){
      console.log("this is data 2")
      console.log(data2)
        return (
            <div className="App">
              <div className = "films-watched-header">
                <div className= 'fade-in-animation'>
                  <h1 className = "title" > You're a genre connoisseur {'<3'} </h1>

                  <div className = "bar-chart">
                  
                  </div>
                  
                </div>
              <button type="button" class="btn btn-outline-light" href = '../css/FilmsWatched.css' onClick = {onClick}> Next </button>
              </div>
            </div>
          );
    } else if (loading === true){
      return(
        <Loading/>
      );
    } else {
        return (
            <div className="App">
              <div className= 'fade-in-animation'>
              <header className="films-watched-header">
                <p> Watch more movies! <br/>
                    We only have (a bit of) information <br/>
                    on the genres you like. </p>
                    <button type="button" class="btn btn-outline-light" href = '../css/FilmsWatched.css' onClick = {onClick}> Next </button>
              </header>
              </div>
            </div>
          );
    }
  }

export default TopGenres; // "export default" keywords specify the main component of the file