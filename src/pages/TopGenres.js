import '../css/FilmsWatched.css';
import '../css/App.css';
import React, { useState, useEffect} from "react";
import Loading from '../components/Loading';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";



function TopGenres({onClick,filmDataObj}) {
    const [genreData,setGenreData] = useState(null);
    const [loading,setLoading] = useState(true);

    const COLORS = ['#1F363D', '#40798C', '#70A9A1', '#9EC1A3', "#CFE0C3"];

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

    const [filteredData,setFilteredData] = useState(data);

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

            console.log(genreDataObj)

            setGenreData(genreDataArray);

            for (var i = 0; i < data.length; i++) {
              data[i].name = genreDataArray[i][0];
              data[i].value = genreDataArray[i][1];
          }
            setFilteredData(data);

            
            
            setLoading(false)
        }
    });

    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="genres-tooltip">
            <p> You've watched {payload[0].value} movies {"\n"} tagged {payload[0].name}. </p>
          </div>
        );
      }
    
      return null;
    };

    if (loading === false && filteredData.length >= 5){
        return (
            <div className="App">
              <div className = "top-genres-header">
                <div className= 'fade-in-animation'>
                  <h1 className = "title" > One might call you a genre connoisseur. </h1>
                  <div className = "pie-chart">
                    <ResponsiveContainer width="100%" height={310}>
                      <PieChart>
                        <Pie
                          dataKey="value"
                          data={filteredData}
                          innerRadius={50}
                          outerRadius={155}
                          fill="#8884d8"
                        >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                      </PieChart>
                    </ResponsiveContainer>
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