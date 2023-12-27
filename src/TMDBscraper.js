import * as Secret from './Secret';


// fetches data from the TMDB api
export const fetchData = async function (userData, setUserData, setMinutesData, setGenreData, setMapData, setAllQueriesCompleted, setLoading, setError) {
  let userDataCopy = JSON.parse(JSON.stringify(userData));
  console.log(userDataCopy)
  for (let i = 0; i < userData.length; i++) {
    let movieJSON = userData[i];
    let movieID = await movieSearch(movieJSON.Name, movieJSON.Year, setLoading, setError);
    let movieData = await movieDetails(movieID, setLoading, setError);
    // let director = await directorDetails(movieID, setLoading, setError);
    await updateCurrentMovie(userDataCopy, movieData, i, setError);
  }
  // cleaning out invalid media
  //console.log(userDataCopy.length)
  const filteredUserDataCopy = userDataCopy.filter(movie => movie !== "invalid media")
  setUserData(filteredUserDataCopy)


  // calculating minutes data
  let totalMinutes = 0;
  for (let i = 0; i < filteredUserDataCopy.length; i++) {
    totalMinutes = totalMinutes + filteredUserDataCopy[i].Runtime
  }
  setMinutesData(totalMinutes);
  setGenreData(getGenreData(filteredUserDataCopy))
  setMapData(getMapData(filteredUserDataCopy))

  // calculating genre data

  setAllQueriesCompleted(true)
}

const updateCurrentMovie = (userDataCopy, currMovieData, index, setError) => {
  return new Promise(function (resolve, reject) {
    if (currMovieData === "invalid media") {
      userDataCopy[index] = "invalid media"
      resolve();
    } else {
      try {
        userDataCopy[index].Runtime = currMovieData.runtime;
        userDataCopy[index].PosterPath = currMovieData.poster_path;
        userDataCopy[index].Genres = currMovieData.genres;
        userDataCopy[index].ProductionCountries = currMovieData.production_countries;
        // userDataCopy[index].Director = director;
        //console.log(userDataCopy[index])
        resolve();
      } catch {
        reject();
        setError("Something has gone haywire. Sorry for the inconvience.");
      }
    }
  });
}

const movieSearch = async function (title, year, setLoading, setError) {
  return new Promise(function (resolve, reject) {
    //console.log(`${title} - ${year}`)
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${Secret.TMBD_API_KEY}&query=${title}&page=1&include_adult=true&year=${year}`)
      .then(res => res.json())
      .then(
        (result) => {
          //console.log("MOVIE SEARCHED")
          //console.log(result);
          if (result.results.length === 0) { // basically occurs if you log tv shows on letterboxd or an invalid movie
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

// const directorDetails = async function (id, setLoading, setError) {
//   return new Promise(function (resolve, reject) {
//     if (id === "invalid media") {
//       resolve("invalid media")
//     } else {
//       fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Secret.TMBD_API_KEY}`)
//         .then(res => res.json())
//         .then(
//           (result) => {
//             console.log(result.crew.filter(({ job }) => job === 'Director')[0].name)
//             resolve(result.crew.filter(({ job }) => job === 'Director')[0].name)
//           },
//           // Note: it's important to handle errors here
//           // instead of a catch() block so that we don't swallow
//           // exceptions from actual bugs in components.
//           (error) => {
//             setLoading(false);
//             setError("There is an issue with retrieving data from the API. Please try again.");;
//             reject()
//           }
//         )
//     }
//   });
// }

const movieDetails = async function (id, setLoading, setError) {
  return new Promise(function (resolve, reject) {
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
  for (let i = 0; i < filmDataObj.length; i++) {
    for (let j = 0; j < filmDataObj[i].Genres.length; j++) {
      let currGenre = filmDataObj[i].Genres[j].name;
      if (genreDataObj.hasOwnProperty(currGenre)) {
        genreDataObj[currGenre] = genreDataObj[currGenre] + 1;
      } else {
        genreDataObj[currGenre] = 1;
      }
    }
  }

  //sorting genres by movie count
  let genreDataArray = Object.entries(genreDataObj).sort(function (a, b) {
    return b[1] - a[1];
  });

  return genreDataArray
}

const getMapData = (filmDataObj) => {
  let mapData = []
  for (let i = 0; i < filmDataObj.length; i++) {
    let productionCountries = filmDataObj[i].ProductionCountries;
    for (let i = 0; i < productionCountries.length; i++) {
      let productionCountry = productionCountries[i].iso_3166_1;
      if (!mapData.hasOwnProperty(productionCountry)) {
        mapData[productionCountry] = 1;
      } else {
        mapData[productionCountry] += 1;
      }
    }
  }
  //console.log(mapData)
  return mapData
}