import '../css/FilmsWatched.css';
import '../css/App.css';
import '../css/Animations.css';

import React, { useState, useEffect } from "react";
import { VectorMap } from "@react-jvectormap/core"
import { worldMill } from '@react-jvectormap/world'


function ProductionMap({ onClick, mapData }) {
    const [mapMessage, setMapMessage] = useState(null);
    const [helpMessage, setHelpMessage] = useState(null);

    useEffect(() => {
        if (helpMessage === null) {
            let countryNum = Object.keys(mapData).length

            if (countryNum === 0) {
                setMapMessage("While this map is empty, I assume you've been outside.")
                setHelpMessage("(How was touching grass?)")
            } else if (countryNum === 1) {
                setMapMessage("Others might call you a domestic movie watcher.")
                setHelpMessage("(Hover over the darkened country to see where your films were produced.)")
            } else if (countryNum < 10) {
                setMapMessage("Others might call you a bonafide globe trotter.")
                setHelpMessage("(Hover to see where your films were produced.)")
            } else {
                setMapMessage("Others might call you a cinematic jet-setter.")
                setHelpMessage("(Hover to see where your (diverse) films were produced.)")
            }
            //console.log(mapData); 
        } else {
            window.addEventListener("keydown", function (e) {
                if (e.key === 'Enter') {
                    onClick();
                }
            })
        }
    }, [helpMessage, mapData, onClick]);

    return (

        <div className="App">
            <div className='background'>
                <div className="practice-map">

                    <div className="map-header">
                        <div className="rem-padding">
                            <header className='map-title' > {mapMessage} </header>
                            <p className='abed-nadir'> {helpMessage} </p>
                        </div>
                        <button type="button" className="btn btn-outline-light" href='../css/FilmsWatched.css' onClick={onClick}> Next </button>
                    </div>


                    <VectorMap className="map-hack"
                        map={worldMill}
                        backgroundColor='transparent'
                        zoomOnScroll={false}
                        containerStyle={{
                            width: '40%',
                            height: '40%'
                        }}
                        containerClassName="map"
                        regionStyle={{
                            initial: {
                                fill: "#e4e4e4",
                                "fill-opacity": 0.9,
                                stroke: "none",
                                "stroke-width": 0,
                                "stroke-opacity": 0
                            },
                            hover: {
                                "fill-opacity": 0.8,
                                cursor: "pointer"
                            },
                            selected: {
                                fill: "#2938bc" //color for the clicked country
                            },
                            selectedHover: {}
                        }}
                        regionsSelectable={false}
                        series={{
                            regions: [
                                {
                                    values: mapData, //this is your data
                                    scale: ["#4d9e41", "#9e4169"], //your color game's here
                                    normalizeFunction: "polynomial"
                                }
                            ]
                        }}
                    />

                </div>

            </div>
        </div>
    );

}

export default ProductionMap; // "export default" keywords specify the main component of the file