import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from  "./Navbar";

import "./Traveldetails.css";

function Traveldetails() {
  const [userCity, setUserCity] = useState("");
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    weatherConditions: "",
    humidity: 0,
    pressure: 0,
  });

  useEffect(() => {
    const fetchPlaceName = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getplace");
        setUserCity(response.data.place_name);
      } catch (error) {
        console.error("Error fetching place name:", error);
      }
    };

    fetchPlaceName();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cityCoords = await getCityCoordinates(userCity);
        const apiKey = '3465e1a76a4bbf0671bc4cb4c2424db1';
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${cityCoords.lat}&lon=${cityCoords.lon}&appid=${apiKey}&units=metric`;
        const weatherResponse = await axios.get(weatherUrl);
        const weatherDetails = weatherResponse.data;

        setWeatherData({
          temperature: weatherDetails.main.temp,
          weatherConditions: weatherDetails.weather[0].main,
          humidity: weatherDetails.main.humidity,
          pressure: weatherDetails.main.pressure,
        });

        // Fetch other data (places to visit, accommodations, restaurants) as before...
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [userCity]);



  const [touristPlaces, setTouristPlaces] = useState([]);
  const [accommodations, setAccommodations] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cityCoords = await getCityCoordinates(userCity);
        const apiKey = '5ae2e3f221c38a28845f05b6d63373a3a7200d5edd9e4bd581e3b7c3';
        const radius = 10000;

        // Fetch places to visit
        const placesUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${cityCoords.lon}&lat=${cityCoords.lat}&apikey=${apiKey}`;
        const placesResponse = await axios.get(placesUrl);
        const places = placesResponse.data.features.map(place => ({
          name: place.properties.name,
          rating: place.properties.rate || 0,
        }));
        const sortedPlaces = places.sort((a, b) => b.rating - a.rating).slice(0, 20);
        setTouristPlaces(sortedPlaces);

        // Fetch accommodations
        const accommodationsUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${cityCoords.lon}&lat=${cityCoords.lat}&kinds=accomodations&apikey=${apiKey}`;
        const accommodationsResponse = await axios.get(accommodationsUrl);
        const accommodations = accommodationsResponse.data.features.map(accommodation => ({
          name: accommodation.properties.name,
          rating: accommodation.properties.rate || 0,
        }));
        const sortedAccommodations = accommodations.sort((a, b) => b.rating - a.rating).slice(0, 30);
        setAccommodations(sortedAccommodations);

        // Fetch restaurants
        const restaurantsUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${cityCoords.lon}&lat=${cityCoords.lat}&kinds=restaurants&apikey=${apiKey}`;
        const restaurantsResponse = await axios.get(restaurantsUrl);
        const restaurants = restaurantsResponse.data.features.map(restaurant => ({
          name: restaurant.properties.name,
          rating: restaurant.properties.rate || 0,
          // Extract other relevant information as needed
        }));
        const sortedRestaurants = restaurants.sort((a, b) => b.rating - a.rating).slice(0, 30);
        setRestaurants(sortedRestaurants);
      } catch (error) {
        console.error('Error fetching data from OpenTripMap API:', error);
      }
    };

    fetchData();
  }, [userCity]);



  const getCityCoordinates = async (city) => {
    try {
      const apiKey = '5ae2e3f221c38a28845f05b6d63373a3a7200d5edd9e4bd581e3b7c3';
      const citySearchUrl = `https://api.opentripmap.com/0.1/en/places/geoname?name=${city}&apikey=${apiKey}`;
      const response = await axios.get(citySearchUrl);
      const cityData = response.data;

      if (cityData.status === "OK") {
        return {
          lon: cityData.lon,
          lat: cityData.lat,
        };
      } else {
        throw new Error(`Could not find coordinates for ${city}`);
      }
    } catch (error) {
      console.error('Error fetching city coordinates:', error);
      throw error;
    }
  };

  return (
    <>
     <Navbar />
      <div className="travelout" >
        <div className="row vits" style={{ marginTop: "5%" }}>


          <div className="col-lg-6 col-md-6 col-sm-12" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <div className="card-header card text-white bg-dark mb-1" style={{ minWidth: "20rem", textAlign: "center" }}><h6 >Places to Visit</h6></div>
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem", minWidth: "20rem", maxHeight: "15rem", overflow: "scroll" }}>

              <div className="card-body">
                {touristPlaces.map((place, index) => (
                  <div key={index}>
                    {place.name}
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className="col-lg-6 col-md-6 col-sm-12" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <div className="card-header card text-white bg-dark mb-1" style={{ minWidth: "20rem", textAlign: "center" }}>Accommodation Details</div>
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem", minWidth: "20rem", maxHeight: "15rem", overflow: "scroll" }}>

              <div className="card-body">
                {accommodations.map((accommodation, index) => (
                  <div key={index}>
                    {accommodation.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <div className="card-header card text-white bg-dark mb-1" style={{ minWidth: "20rem", textAlign: "center" }}><h6>Restaurants</h6></div>
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem", minWidth: "20rem", maxHeight: "15rem", overflow: "scroll" }}>

              <div className="card-body">
                {restaurants.map((restaurant, index) => (
                  <div key={index}>
                    {restaurant.name}

                  </div>
                ))}
              </div>
            </div>
          </div>



          {/* Card for Weather Information */}
          <div className="col-lg-6 col-md-6 col-sm-12" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <div className="card-header card text-white bg-dark mb-1" style={{ minWidth: "20rem", textAlign: "center" }}><h6>Weather Information</h6></div>
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem", minWidth: "20rem", maxHeight: "15rem", overflow: "scroll" }}>
              <div className="card-body">
                <p>Current Temperature: {weatherData.temperature}°C</p>
                <p>Weather Conditions: {weatherData.weatherConditions}</p>
                <p>Humidity Level: {weatherData.humidity}</p>
                <p>Pressure Level: {weatherData.pressure}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Traveldetails;





















/*
import "./Traveldetails.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState, useEffect } from "react";
import axios from "axios";

function Traveldetails() {
  const [userCity, setUserCity] = useState("");
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    weatherConditions: "",
    climateDescription: "",
    seasonalWeather: "",
  });

  const [touristPlaces, setTouristPlaces] = useState([]);
  const [accommodations, setAccommodations] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchPlaceName = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getplace");
        setUserCity(response.data.place_name);
      } catch (error) {
        console.error("Error fetching place name:", error);
      }
    };

    fetchPlaceName();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cityCoords = await getCityCoordinates(userCity);
        const apiKey = '3465e1a76a4bbf0671bc4cb4c2424db1';
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${cityCoords.lat}&lon=${cityCoords.lon}&appid=${apiKey}&units=metric`;
        const weatherResponse = await axios.get(weatherUrl);
        const weatherDetails = weatherResponse.data;

        setWeatherData({
          temperature: weatherDetails.main.temp,
          weatherConditions: weatherDetails.weather[0].main,
          humidity: weatherDetails.list[0].main.humidity, // You can fetch this data from another source or API
          seasonalWeather: "", // Similarly, fetch seasonal weather information
        });

        // Fetch other data (places to visit, accommodations, restaurants) as before...
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [userCity]);

  const getCityCoordinates = async (city) => {
    try {
      const apiKey = '5ae2e3f221c38a28845f05b6d63373a3a7200d5edd9e4bd581e3b7c3';
      const citySearchUrl = `https://api.opentripmap.com/0.1/en/places/geoname?name=${city}&apikey=${apiKey}`;
      const response = await axios.get(citySearchUrl);
      const cityData = response.data;

      if (cityData.status === "OK") {
        return {
          lon: cityData.lon,
          lat: cityData.lat,
        };
      } else {
        throw new Error(`Could not find coordinates for ${city}`);
      }
    } catch (error) {
      console.error('Error fetching city coordinates:', error);
      throw error;
    }
  };

  return (
    <>
      <div className="travelout">
        <div className="row vits"style={{marginTop:"10%"}}>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card-header card text-white bg-dark mb-1" style={{ maxWidth: "20rem",textAlign:"center" }}><h6 >Places to Visit</h6></div>
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem", maxHeight: "15rem", overflow: "scroll" }}>

              <div className="card-body">
                
                {touristPlaces.map((place, index) => (
                  <div key={index}>
                    {place.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card-header card text-white bg-dark mb-1" style={{ maxWidth: "20rem" ,textAlign:"center"}}>Accommodation Details</div>
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem", maxHeight: "15rem", overflow: "scroll" }}>

              <div className="card-body">
                
                {accommodations.map((accommodation, index) => (
                  <div key={index}>
                    {accommodation.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card-header card text-white bg-dark mb-1" style={{ maxWidth: "20rem" ,textAlign:"center"}}><h6>Restaurants</h6></div>
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem", maxHeight: "15rem", overflow: "scroll" }}>

              <div className="card-body">
             
                {restaurants.map((restaurant, index) => (
                  <div key={index}>
                    {restaurant.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card-header card text-white bg-dark mb-1" style={{ maxWidth: "20rem",textAlign:"center" }}><h6 >Weather Information</h6></div>
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem", maxHeight: "15rem", overflow: "scroll" }}>

              <div className="card-body">
                <p>Current Temperature: {weatherData.temperature}°C</p>
                <p>Weather Conditions: {weatherData.weatherConditions}</p>
                <p>Humidity: {weatherData.humidity}</p>
                <p>Seasonal Weather: {weatherData.seasonalWeather}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Traveldetails;
*/



































/*
import "./Traveldetails.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState, useEffect } from "react";
import axios from "axios";

function Traveldetails() {
  const [userCity, setUserCity] = useState("");
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    weatherConditions: "",
    climateDescription: "",
    seasonalWeather: "",
  });

  const [touristPlaces, setTouristPlaces] = useState([]);
  const [accommodations, setAccommodations] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchPlaceName = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getplace");
        setUserCity(response.data.place_name);
      } catch (error) {
        console.error("Error fetching place name:", error);
      }
    };

    fetchPlaceName();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cityCoords = await getCityCoordinates(userCity);
        const apiKey = '3465e1a76a4bbf0671bc4cb4c2424db1';
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${cityCoords.lat}&lon=${cityCoords.lon}&appid=${apiKey}&units=metric`;
        const weatherResponse = await axios.get(weatherUrl);
        const weatherDetails = weatherResponse.data;

        setWeatherData({
          temperature: weatherDetails.main.temp,
          weatherConditions: weatherDetails.weather[0].main,
          humidity: weatherDetails.list[0].main.humidity, // You can fetch this data from another source or API
          seasonalWeather: "", // Similarly, fetch seasonal weather information
        });

        // Fetch other data (places to visit, accommodations, restaurants) as before...
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [userCity]);

  const getCityCoordinates = async (city) => {
    try {
      const apiKey = '5ae2e3f221c38a28845f05b6d63373a3a7200d5edd9e4bd581e3b7c3';
      const citySearchUrl = `https://api.opentripmap.com/0.1/en/places/geoname?name=${city}&apikey=${apiKey}`;
      const response = await axios.get(citySearchUrl);
      const cityData = response.data;

      if (cityData.status === "OK") {
        return {
          lon: cityData.lon,
          lat: cityData.lat,
        };
      } else {
        throw new Error(`Could not find coordinates for ${city}`);
      }
    } catch (error) {
      console.error('Error fetching city coordinates:', error);
      throw error;
    }
  };

  return (
    <>
      <div className="travelout">
        <div className="row vits"style={{marginTop:"10%"}}>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card-header card text-white bg-dark mb-1" style={{ maxWidth: "20rem",textAlign:"center" }}><h6 >Places to Visit</h6></div>
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem", maxHeight: "15rem", overflow: "scroll" }}>

              <div className="card-body">
                
                {touristPlaces.map((place, index) => (
                  <div key={index}>
                    {place.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card-header card text-white bg-dark mb-1" style={{ maxWidth: "20rem" ,textAlign:"center"}}>Accommodation Details</div>
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem", maxHeight: "15rem", overflow: "scroll" }}>

              <div className="card-body">
                
                {accommodations.map((accommodation, index) => (
                  <div key={index}>
                    {accommodation.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card-header card text-white bg-dark mb-1" style={{ maxWidth: "20rem" ,textAlign:"center"}}><h6>Restaurants</h6></div>
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem", maxHeight: "15rem", overflow: "scroll" }}>

              <div className="card-body">
             
                {restaurants.map((restaurant, index) => (
                  <div key={index}>
                    {restaurant.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card-header card text-white bg-dark mb-1" style={{ maxWidth: "20rem",textAlign:"center" }}><h6 >Weather Information</h6></div>
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem", maxHeight: "15rem", overflow: "scroll" }}>

              <div className="card-body">
                <p>Current Temperature: {weatherData.temperature}°C</p>
                <p>Weather Conditions: {weatherData.weatherConditions}</p>
                <p>Humidity: {weatherData.humidity}</p>
                <p>Seasonal Weather: {weatherData.seasonalWeather}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Traveldetails;
*/


















