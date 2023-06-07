import '../css/FilmsWatched.css';
import '../css/App.css';
import '../css/Animations.css';

import React, { useState, useEffect} from "react";
import Loading from '../components/Loading';
import PieChartComponent from '../components/PieChartComponent';


function TopGenres({onClick,genreData}) {
    const [loading,setLoading] = useState(true);
    const [displayData,setDisplayData] = useState(null);
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
        if (displayData === null){
            // actually taking top 5
            if (genreData.length >= 5){
              for (var i = 0; i < data.length; i++) {
                data[i].name = genreData[i][0];
                data[i].value = genreData[i][1];
              } 
              setDisplayData(data);
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
                    <PieChartComponent data = {displayData} />
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