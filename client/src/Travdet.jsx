
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Travel.css";
import React from "react";
import axios from 'axios';
import Navbar from "./Navbar";

import place from "./images/place.jpg";
import Reviews from "./images/Reviews.jpg";
import temp from "./images/temp.jpg";
import accom from "./images/accom.jpg";
import food from "./images/food.jpg";
import taj from "./images/taj.jpg";

function Travdet() {
    //const axios = require('axios');

    const apiKey = '5ae2e3f221c38a28845f05b6d63373a3a7200d5edd9e4bd581e3b7c3';
    const userCity = 'hyderabad';
    
    const apiUrl = `https://api.opentripmap.com/0.1/en/places/geoname?name=${userCity}&apikey=${apiKey}`;
    
    axios.get(apiUrl)
      .then(response => {
        // Handle the response data and extract tourist places information
        const touristPlaces = response.data;
        console.log(touristPlaces);
      })
      .catch(error => {
        console.error('Error fetching data from OpenTripMap API:', error);
      });
    

    return (
        <>
            <div className="svrc">

                <div className="navb">
                    
 </div>

                <div className=" row travdetcon">

                    <div className="col-lg-3 col-md-6 col-sm-12" >
                        <img className="travimg" src={place} alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12" >
                        <img className="travimg" src={accom} alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12" >
                        <img className="travimg" src={Reviews} alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12" >
                        <img className="travimg" src={temp} alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12" >
                        <img className="travimg" src={food} alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12" >
                        <img className="travimg" src={food} alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12" >
                        <img className="travimg" src={food} alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12" >
                        <img className="travimg" src={food} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Travdet;

