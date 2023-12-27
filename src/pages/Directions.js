// libraries/fw
import React, { useEffect } from 'react';
import { useState } from 'react';
import Papa from 'papaparse';
// parsing functions
import { fetchData } from '../TMDBscraper';
import { fetchDiary } from '../diaryscraper';
// components
import Loading from '../components/Loading';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// styles
import '../css/App.css';
import '../css/Animations.css';


function Directions({ setPageIndex, setFilmDataObj, setErrorMessage,
  setMinutesData, setGenreData, setMapData }) {
  const [userData, setUserData] = useState(null);
  const [allQueriesCompleted, setAllQueriesCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [useCSV, setUseCSV] = useState(false);
  const [validated, setValidated] = useState(false);

  useEffect(() => { // should only trigger upon upload -> state change!
    if (userData != null && allQueriesCompleted === false) { // if there's data to process
      setLoading(true)
      console.log("fetching TMDB data...")
      fetchData(userData, setUserData, setMinutesData, setGenreData, setMapData, setAllQueriesCompleted, setLoading, setError)
    } else if (allQueriesCompleted === true && loading === true) {
      console.log("ALL QUERIES COMPLETED!");
      setFilmDataObj(userData);
      setPageIndex(2)
      setLoading(false)
      // purpose of this: when we reset, this makes sure that we can run another command
      setUserData(null)
      setAllQueriesCompleted(false)
    } else if (error != null) {
      setPageIndex('error')
    }
  }, [userData, allQueriesCompleted, loading, error, setMinutesData, setGenreData, setMapData, setFilmDataObj, setPageIndex]);

  // logs state so i can see what's going on (debugging)
  // const logState = () => {
  //   let userDataStr = (userData === null) ? "null" : "not null"
  //   console.log(`user data: ${userDataStr}`)
  //   console.log(`all queries completed: ${allQueriesCompleted}`)
  //   console.log(`loading: ${loading}`)
  //   console.log(`error: ${error}`)
  // }

  // if the user uses the file handler option
  const fileHandler = (event) => {
    // from: https://medium.com/how-to-react/how-to-parse-or-read-csv-files-in-reactjs-81e8ee4870b0
    // Passing file data (event.target.files[0]) to parse using Papa.parse

    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        //console.log(event.target.files[0].name)

        if (event.target.files[0].name !== 'diary.csv') {
          setError("You might have attached the wrong file. Please try again.")
        } else {
          let resultData = results.data; // result data from all years
          // result data from specified time period
          let resultsInPeriod = null
          try {
            resultsInPeriod = resultData.filter(movie => { return movie['Watched Date'].slice(0, 4) === (new Date()).getFullYear().toString(); });

            resultsInPeriod = resultsInPeriod.filter((resultsInPeriod, index, self) =>
              index === self.findIndex((t) =>
              (t.Date === resultsInPeriod.Date && t.Name === resultsInPeriod.Name &&
                t.Rating === resultsInPeriod.Rating && t.Rewatch === resultsInPeriod.Rewatch &&
                t.Tags === resultsInPeriod.Tags && t.Tags === resultsInPeriod.Tags &&
                t['Watched Date'] === resultsInPeriod['Watched Date'] && t.Year === resultsInPeriod.Year)))
          } catch {
            setError("You might have attached the wrong file. Please try again.")
          }
          resultsInPeriod = resultsInPeriod.map(function (element) {
            // if the user chose not to give a rating, it is automatically converted to 0
            let rating = element.Rating === '' ? '0' : element.Rating;
            return { Name: element.Name, Rating: rating, Year: element.Year }
          })
          console.log(resultsInPeriod)

          setUserData(resultsInPeriod);

        }
      },
    });
  };

  const UsernameInput = () => {
    const handleKeyDown = async (event) => {
      if (event.key === 'Enter') {
        //event.preventDefault()
        setLoading(true)
        setUserData(null)
        await fetchDiary(event.target.value)
          .then(response => JSON.parse(response))
          .then(data => {
            if (data.length === 0) {
              console.log("invalid")
              setValidated(false);
              setLoading(false)
              event.stopPropagation();
            } else {
              setUserData(data)
            }
          })
      }
    }
    const handleCSVClick = () => {
      setUseCSV(true)
    }
    return (
      <div className="App">
        <Form noValidate validated={validated} onKeyDown={handleKeyDown}>
          <Form.Group md="4" controlId="validationCustomUsername">
            <Form.Label  >Your username, please.</Form.Label>
            <div className='username-entry'>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  required
                  type="text"
                  placeholder="reactionshot"
                  aria-describedby="inputGroupPrepend"
                />
                <Form.Control.Feedback type="invalid" className='use-csv-link'>
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </div>
            <p className='use-csv-link' onClick={handleCSVClick} style={{ cursor: 'pointer' }}>Network issues? Try using a CSV.</p>
          </Form.Group>
        </Form>
      </div>
    );
  }



  // RENDERING THE PAGE
  if (error) {
    setPageIndex('error')
    setErrorMessage(error)
  } else if (loading === true) {
    return (
      < Loading />
    );
  } else if (useCSV) {
    return (
      <div className="App">
        <header className="App-header">
          <div className='fade-in-animation'>
            <p>
              Directions For Use
            </p>
            <div className="rem-padding">
              <div className='App-body'>
                <p>
                  1. Log in to your Letterboxd account <br />
                  2. Navigate to <a href="https://letterboxd.com/settings/">Settings</a>.<br />
                  3. Click “Import & Export” <br />
                  4. Click "Export Your Data" <br />
                  5. Unzip the folder and upload "diary.csv"
                </p>
              </div>
            </div>
            <div className="mb-3">
              <input className="form-control" type="file" id="csvFile" accept=".csv" onChange={fileHandler} />
            </div>
            <br />
          </div>
        </header>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <div className='fade-in-animation'>
            <div>
              <UsernameInput />
            </div>
            <br />
          </div>
        </header>
      </div>
    );
  }
}

export default Directions; // "export default" keywords specify the main component of the file