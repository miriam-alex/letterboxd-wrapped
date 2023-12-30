import '../css/FilmsWatched.css';
import '../css/App.css';
import '../css/Animations.css';
import React, { useState, useEffect } from "react";
import Infographic from '../components/Infographic';
import html2canvas from 'html2canvas';


function Final({ onClick, topMovies, minutesData, genreData }) {
  const [canDisplay, setCanDisplay] = useState(true);
  const printRef = React.useRef();
  const [bgColor, setBgColor] = useState("#9D5A5A");

  useEffect(() => {
    window.addEventListener("keydown", function (e) {
      if (e.key === 'Enter') {
        onClick();
      }
    })

    if (canDisplay === true && topMovies.length < 5) {
      setCanDisplay(false)
    }
  }, [canDisplay, topMovies.length, onClick]);

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element, {
      allowTaint: true,
      useCORS: true,
      scale: 5
    });

    const data = canvas.toDataURL('image/png');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.png';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  const changeColor = () => {
    // generating rgb
    let r = Math.floor(Math.random() * 175)
    let g = Math.floor(Math.random() * 175)
    let b = Math.floor(Math.random() * 175)
    setBgColor(rgbToHex(r, g, b));
  }

  if (canDisplay === false) {
    return (
      <div className="App">
        <header className="App-header-3">
          <div className='fade-in-animation'>
            <div className='top-five-no-content'>
              <p> Thanks for playing. <br /> Log more movies to generate a sick infographic! </p>
            </div>
            <button type="button" className="btn btn-outline-light" onClick={onClick}> Home </button>
          </div>
        </header>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header-3">
          <div className='fade-in-animation'>
            <div className='final-col-1' onClick={changeColor}>
              <div ref={printRef}>
                <Infographic
                  className="infographic"
                  topMovies={topMovies}
                  minutesData={minutesData}
                  genreData={genreData}
                  color={bgColor}
                />
              </div>
            </div>
            <div className='final-col-2'>
              <p className="info-caption" > And that's your year in film.
              </p>
            </div>
          </div>
          {/* <button type="button" className="info-button-2" onClick={handleDownloadImage}> (To commemorate, download this here.) </button> */}
          <button type="button" style={{ marginTop: "1.5rem" }} className="btn btn-outline-light" onClick={onClick}> Home </button>
        </header>
      </div>
    );
  }
}

export default Final; // "export default" keywords specify the main component of the file