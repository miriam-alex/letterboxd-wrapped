import '../css/FilmsWatched.css';
import '../css/App.css';
import '../css/Animations.css';

import React, { useState, useEffect} from "react";
import Loading from '../components/Loading';
import PieChartComponent from '../components/PieChartComponent';


function TopGenres({onClick,filmDataObj}) {
    const [loading,setLoading] = useState(true);
    const [filteredData,setFilteredData] = useState(null);
    const [canDisplay, setCanDisplay] = useState(true);

    const data = [
      {
        name: "Unpop1",
        value: 4000
      },
      {
        name: "Unpop2",
        value: 3000
      },
      {
        name: "Unpop3",
        value: 2000
      },
      {
        name: "Unpop4",
        value: 2780
      },
      {
        name: "Unpop5",
        value: 1890
      }
    ];

    useEffect(()=> {
        if (filteredData === null){
            let genreDataObj = {}
            for (let i=0; i<filmDataObj.length; i++){
                for (let j=0; j<filmDataObj[i].Genres.length;j++){
                    let currGenre = filmDataObj[i].Genres[j].name;
                    if (genreDataObj.hasOwnProperty(currGenre)){
                        genreDataObj[currGenre] = genreDataObj[currGenre] + 1;
                    } else {
                        genreDataObj[currGenre] = 1;
                    }
                }
            }

            // sorting genres by movie count
            let genreDataArray = Object.entries(genreDataObj).sort(function(a, b) {
                return b[1] - a[1];
            });

            // actually taking top 5
            if (genreDataArray.length >= 5){
              for (var i = 0; i < data.length; i++) {
                data[i].name = genreDataArray[i][0];
                data[i].value = genreDataArray[i][1];
              } 
              setFilteredData(data);
            } else {
              setCanDisplay(false);
            }
            setLoading(false)
          }
        }
    );

    if (loading === false && canDisplay){
        return (
            <div className="App">
              <div className = "top-genres-header">
                <div className= 'fade-in-animation'>
                  <h1 className = "title" > One might call you a genre connoisseur. </h1>
                  <div className = "pie-chart">
                    <PieChartComponent data = {filteredData} />
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
              <header className="films-watched-header">
                <div className= 'fade-in-animation'>
                  <p> Some might wonder <br/>
                      how you survive on so little media. <br/>
                      Maybe you're off the grid. </p>
                  <button type="button" class="btn btn-outline-light" href = '../css/FilmsWatched.css' onClick = {onClick}> Next </button>
                </div>
              </header>
            </div>
          );
    }
  }

export default TopGenres; // "export default" keywords specify the main component of the file