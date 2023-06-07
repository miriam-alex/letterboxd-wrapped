import '../css/App.css';
import '../css/Animations.css';
import React, { useEffect } from 'react';
import Papa from 'papaparse';
import { useState } from 'react';
import * as Secret from '../Secret';
import Loading from '../components/Loading';


function Directions({setPageIndex, setFilmDataObj,setErrorMessage, 
                    setMinutesData, setGenreData, setMapData}) {
  const [userData,setUserData] = useState(null);

  // for querying movie data
  const [allQueriesCompleted,setAllQueriesCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchCalled, setFetchCalled] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=> { // should only trigger upon upload -> state change!
    if (userData != null && allQueriesCompleted === false && fetchCalled === false){ // if there's data to process
      fetchData()
      //test()
      setFetchCalled(true)
      setLoading(true)
    } else if (allQueriesCompleted === true && loading === true){
      setFilmDataObj(userData);
      //console.log(userData);
      setLoading(false)
      setPageIndex(2)
    } else if (error != null) {
      setPageIndex('error')
    }
  });

  /*
  const test = function(){
    fetch('https://letterboxd.com/reactionshot/films/diary/for/2023/', {
      
    })
    .then(function (response) {
        switch (response.status) {
            // status "OK"
            case 200:
                return response.text();
            // status "Not Found"
            case 404:
                throw response;
        }
    })
    .then(function (template) {
        console.log("found")
        console.log(template);
    })
    .catch(function (response) {
        // "Not Found"
        console.log("not found")
        console.log(response.statusText);
    });
  }
  */

  const fetchData = async function() {
    let userDataCopy = JSON.parse(JSON.stringify(userData));
    for (let i=0; i<userData.length; i++){
      let movieJSON = userData[i];
      let movieID = await movieSearch(movieJSON.Name,movieJSON.Year);
      let movieData = await movieDetails(movieID);
      let director = await directorDetails(movieID);
      await updateCurrentMovie(userDataCopy,movieData, director, i);
    }
    // cleaning out invalid media
    //console.log(userDataCopy.length)
    const filteredUserDataCopy = userDataCopy.filter(movie => movie !== "invalid media")
    setUserData(filteredUserDataCopy)


    // calculating minutes data
    let totalMinutes = 0;
    for (let i=0; i<filteredUserDataCopy.length; i++){
        totalMinutes = totalMinutes + filteredUserDataCopy[i].Runtime
    }
    setMinutesData(totalMinutes);
    setGenreData(getGenreData(filteredUserDataCopy))
    setMapData(getMapData(filteredUserDataCopy))
  
    // calculating genre data

    setAllQueriesCompleted(true)
  }

  const updateCurrentMovie = (userDataCopy,currMovieData,director,index) => {
    return new Promise(function(resolve, reject) {
      if (currMovieData === "invalid media"){
        userDataCopy[index] = "invalid media"
        resolve();
      } else {
        try {
          userDataCopy[index].Runtime = currMovieData.runtime;
          userDataCopy[index].PosterPath = currMovieData.poster_path;
          userDataCopy[index].Genres = currMovieData.genres;
          userDataCopy[index].ProductionCountries = currMovieData.production_countries;
          userDataCopy[index].Director = director;
          //console.log(userDataCopy[index])
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
      //console.log(`${title} - ${year}`)
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${Secret.TMBD_API_KEY}&query=${title}&page=1&include_adult=true&year=${year}`)
      .then(res => res.json())
      .then(
        (result) => {
          //console.log("MOVIE SEARCHED")
          //console.log(result);
          if (result.results.length === 0){ // basically occurs if you log tv shows on letterboxd or an invalid movie
            //console.log(`INVALID MEDIA IS ${title} - ${year}`)
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

  const directorDetails = async function (id) {
    return new Promise(function(resolve, reject) {
      if (id === "invalid media") {
        resolve("invalid media")
      } else {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Secret.TMBD_API_KEY}`)
        .then(res => res.json())
        .then(
          (result) => {
            //console.log(result.crew.filter(({job})=> job ==='Director')[0].name)
            resolve(result.crew.filter(({job})=> job ==='Director')[0].name)
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

  const movieDetails = async function (id) {
    return new Promise(function(resolve, reject) {
      if (id === "invalid media") {
        resolve("invalid media")
      } else {
        //console.log(id)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${Secret.TMBD_API_KEY}&language=en-US`)
        .then(res => res.json())
        .then(
          (result) => {
            //console.log("MOVIE DETAILED")
            //console.log(result)
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

  const getGenreData = (filmDataObj) => {
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

    //sorting genres by movie count
    let genreDataArray = Object.entries(genreDataObj).sort(function(a, b) {
        return b[1] - a[1];
    });

    return genreDataArray
  }

  const getMapData = (filmDataObj) => {
    let mapData = []
    for (let i=0; i<filmDataObj.length; i++){
        let productionCountries = filmDataObj[i].ProductionCountries;
        for (let i=0; i<productionCountries.length; i++){
            let productionCountry = productionCountries[i].iso_3166_1;
            if (!mapData.hasOwnProperty(productionCountry)){
                mapData[productionCountry] = 1;
            } else {
                mapData[productionCountry] += 1;
            }
        }
    }
    //console.log(mapData)
    return mapData
  }

  const fileHandler = (event) => {
    // from: https://medium.com/how-to-react/how-to-parse-or-read-csv-files-in-reactjs-81e8ee4870b0
    // Passing file data (event.target.files[0]) to parse using Papa.parse

    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        //console.log(event.target.files[0].name)

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



  // RENDERING THE PAGE
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
              <div className = "rem-padding">
                <div className='App-body'>
                  <p>
                  1. Log in to your Letterboxd account <br/>
                  2. Navigate to <a href="https://letterboxd.com/settings/">Settings</a>.<br/>
                  3. Click “Import & Export” <br/>
                  4. Click "Export Your Data" <br/>
                  5. Unzip the folder and upload "diary.csv"
                  </p>
                </div>
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