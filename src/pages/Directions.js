import '../css/App.css';
import React, { useEffect } from 'react';
import Papa from 'papaparse';
import { useState } from 'react';
import * as Secret from '../Secret';
import Loading from '../components/Loading';

function Directions({setPageIndex, setFilmDataObj,setErrorMessage}) {
  const [userData,setUserData] = useState(null);

  // for querying movie data
  const [allQueriesCompleted,setAllQueriesCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=> { // should only trigger upon upload -> state change!
    if (userData != null && allQueriesCompleted === false){ // if there's data to process
      fetchData()
      setLoading(true)
    } else if (allQueriesCompleted === true && loading === true){
      console.log("all queries completed. final user data below")
      console.log(userData)
      setFilmDataObj(userData);
      setLoading(false)
      setPageIndex(2)
    } else if (error != null) {
      setPageIndex('error')
    }
  });
  
  const fetchData = async function() {
    let userDataCopy = JSON.parse(JSON.stringify(userData));
    for (let i=0; i<userData.length; i++){
      console.log(`looking @ movie ${i}`);

      let movieJSON = userData[i];
      let movieID = await movieSearch(movieJSON.Name,movieJSON.Year);
      let movieData = await movieDetails(movieID);
      await updateCurrentMovie(userDataCopy,movieData, i);
      
    }
    // cleaning out invalid media
    console.log(userDataCopy.length)
    const filteredUserDataCopy = userDataCopy.filter(movie => movie !== "invalid media")
    setUserData(filteredUserDataCopy)
    setAllQueriesCompleted(true)
  }

  const updateCurrentMovie = (userDataCopy,currMovieData,index) => {
    return new Promise(function(resolve, reject) {
      if (currMovieData === "invalid media"){
        userDataCopy[index] = "invalid media"
        resolve();
      } else {
        try {
          userDataCopy[index].Runtime = currMovieData.runtime;
          userDataCopy[index].Genres = currMovieData.genres;
          userDataCopy[index].ProductionCountries = currMovieData.production_countries;
          resolve();
        } catch {
          reject();
          setError("Something has gone haywire. Sorry for the inconvience.");
        }
      }
    });
  }

  const movieSearch = async function(title,year) {
    return new Promise(function(resolve, reject) {
      console.log(`${title} - ${year}`)
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${Secret.TMBD_API_KEY}&query=${title}&page=1&include_adult=true&year=${year}`)
      .then(res => res.json())
      .then(
        (result) => {
          //console.log("MOVIE SEARCHED")
          console.log(result);
          if (result.results.length === 0){ // basically occurs if you log tv shows on letterboxd or an invalid movie
            console.log(`INVALID MEDIA IS ${title} - ${year}`)
            resolve("invalid media")
          } else {
            resolve(result.results[0].id);
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setLoading(false);
          setError("There is an issue with retrieving data from the API. Please try again.");
          reject();
        }
      )
    });
  }

  const movieDetails = async function (id) {
    return new Promise(function(resolve, reject) {
      if (id === "invalid media") {
        resolve("invalid media")
      } else {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${Secret.TMBD_API_KEY}&language=en-US`)
        .then(res => res.json())
        .then(
          (result) => {
            console.log("MOVIE DETAILED")
            console.log(result)
            resolve(result)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setLoading(false);
            setError("There is an issue with retrieving data from the API. Please try again.");;
            reject()
          }
        )
      }
    });
  }

  const fileHandler = (event) => {
    // from: https://medium.com/how-to-react/how-to-parse-or-read-csv-files-in-reactjs-81e8ee4870b0
    // Passing file data (event.target.files[0]) to parse using Papa.parse

    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log(event.target.files[0].name)

        if (event.target.files[0].name !== 'diary.csv'){
          setError("You might have attached the wrong file. Please try again.")
        } else {
          let resultData = results.data; // result data from all years
          // result data from specified time period
          let resultsInPeriod = null
          try {
            resultsInPeriod = resultData.filter(movie => {return movie['Watched Date'].slice(0,4) === (new Date()).getFullYear().toString();}); 

            resultsInPeriod = resultsInPeriod.filter((resultsInPeriod, index, self) =>
              index === self.findIndex((t) => 
              (t.Date === resultsInPeriod.Date && t.Name === resultsInPeriod.Name &&
              t.Rating === resultsInPeriod.Rating && t.Rewatch === resultsInPeriod.Rewatch &&
              t.Tags === resultsInPeriod.Tags && t.Tags === resultsInPeriod.Tags &&
              t['Watched Date'] === resultsInPeriod['Watched Date'] && t.Year === resultsInPeriod.Year)))
            } catch {
              setError("You might have attached the wrong file. Please try again.")
            }
          setUserData(resultsInPeriod);
        }
      },
    });
  };
  if (error){
    setPageIndex('error')
    setErrorMessage(error)
  } else if (loading === true) {
    return (
      < Loading/>
    );
  } else {
    return (
      <div className="App">
          <header className="App-header">
          <div className= 'fade-in-animation'>
              <p>
                Directions For Use
              </p>
              <div className='App-body'>
                <p>
                1. Log in to your Letterboxd account <br/>
                2. Navigate to <a href="https://letterboxd.com/settings/">Settings</a>.<br/>
                3. Click “Import & Export” <br/>
                4. Click "Export Your Data" <br/>
                5. Unzip the folder and upload "diary.csv"
                </p>
              </div>
              <div className="mb-3">
                <input className="form-control" type="file" id="csvFile" accept=".csv" onChange={fileHandler}/>
              </div>
              <br/>
            </div>
          </header>
      </div>
    );
  }
}
 
export default Directions; // "export default" keywords specify the main component of the file