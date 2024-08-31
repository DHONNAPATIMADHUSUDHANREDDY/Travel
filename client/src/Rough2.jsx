/*
import React, { useState, useEffect } from "react";
import axios from "axios";


function Rough2() {
  const [userCity, setUserCity] = useState("hyderabad"); // Set default city to Hyderabad
  const [touristPlaces, setTouristPlaces] = useState([]);

  useEffect(() => {
    const fetchTouristPlaces = async () => {
      try {
        // Fetch coordinates for the user-entered city
        const cityCoords = await getCityCoordinates(userCity);

        // Fetch tourist places around the user-entered city coordinates
        const apiKey = '5ae2e3f221c38a28845f05b6d63373a3a7200d5edd9e4bd581e3b7c3';
        const radius = 10000; // Adjust the radius as needed

        const apiUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${cityCoords.lon}&lat=${cityCoords.lat}&apikey=${apiKey}`;

        const response = await axios.get(apiUrl);

        // Handle the response data and extract tourist places information
        const places = response.data.features.map(place => ({
          name: place.properties.name,
          rating: place.properties.rate || 0, // Use 0 as default rating if not available
          // Extract other relevant information as needed
        }));

        // Sort the places by rating in descending order and get the top 20
        const sortedPlaces = places.sort((a, b) => b.rating - a.rating).slice(0, 20);

        setTouristPlaces(sortedPlaces);
      } catch (error) {
        console.error('Error fetching data from OpenTripMap API:', error);
      }
    };

    // Fetch tourist places when the component mounts or userCity changes
    fetchTouristPlaces();
  }, [userCity]); // Run the effect when userCity changes

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

  // Render the tourist places directlyS
  return (

    <div className="">
       
      

      {touristPlaces.map((place, index) => (

       
        <div key={index}>
          
       
          {place.name} - Rating: {place.rating}
         
        </div>

      ))}
     
    </div>
  );
}

export default Rough2;



- ---- - - - - - ---- -- - -- - - - - -- - -  - - ----------------------------------------
*/
/*
import React, { useState, useEffect } from "react";
import axios from "axios";

function Rough2() {
  const [userCity, setUserCity] = useState("hyderabad"); // Set default city to Hyderabad
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        // Fetch coordinates for the user-entered city
        const cityCoords = await getCityCoordinates(userCity);

        // Fetch accommodations around the user-entered city coordinates
        const apiKey = '5ae2e3f221c38a28845f05b6d63373a3a7200d5edd9e4bd581e3b7c3'; // Replace with your actual API key
        const radius = 10000; // Adjust the radius as needed

        const accommodationUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${cityCoords.lon}&lat=${cityCoords.lat}&kinds=accomodations&apikey=${apiKey}`;

        const response = await axios.get(accommodationUrl);

        // Handle the response data and extract accommodation information
        const accommodations = response.data.features.map(accommodation => ({
          name: accommodation.properties.name,
          rating: accommodation.properties.rate || 0,
          // Extract other relevant information as needed
        }));

        setAccommodations(accommodations);
      } catch (error) {
        console.error('Error fetching accommodation data from OpenTripMap API:', error);
      }
    };

    // Fetch accommodations when the component mounts or userCity changes
    fetchAccommodations();
  }, [userCity]); // Run the effect when userCity changes

  const getCityCoordinates = async (city) => {
    try {
      const apiKey = '5ae2e3f221c38a28845f05b6d63373a3a7200d5edd9e4bd581e3b7c3'; // Replace with your actual API key
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

  // Render the accommodation details
  return (
    <div className="">
      {accommodations.map((accommodation, index) => (
        <div key={index}>
          {accommodation.name} - Rating: {accommodation.rating}
         
        </div>
      ))}
    </div>
  );
}

export default Rough2;


*/

/*
import React, { useState, useEffect } from "react";
import axios from "axios";

function Rough2() {
  const [userCity, setUserCity] = useState("hyderabad"); // Set default city to Hyderabad
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        // Fetch coordinates for the user-entered city
        const cityCoords = await getCityCoordinates(userCity);

        // Fetch accommodations around the user-entered city coordinates
        const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
        const radius = 10000; // Adjust the radius as needed

        const accommodationUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${cityCoords.lon}&lat=${cityCoords.lat}&kinds=accomodations&apikey=${apiKey}`;

        const response = await axios.get(accommodationUrl);

        // Handle the response data and extract accommodation information
        const accommodations = response.data.features.map(accommodation => ({
          name: accommodation.properties.name,
          rating: accommodation.properties.rate || 0,
          // Extract other relevant information as needed
        }));

        // Sort the accommodations by rating in descending order and get the top 50
        const sortedAccommodations = accommodations.sort((a, b) => b.rating - a.rating).slice(0, 50);

        setAccommodations(sortedAccommodations);
      } catch (error) {
        console.error('Error fetching accommodation data from OpenTripMap API:', error);
      }
    };

    // Fetch accommodations when the component mounts or userCity changes
    fetchAccommodations();
  }, [userCity]); // Run the effect when userCity changes

  const getCityCoordinates = async (city) => {
    try {
      const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
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

  // Render the accommodation details
  return (
    <div className="">
      {accommodations.map((accommodation, index) => (
        <div key={index}>
          {accommodation.name} - Rating: {accommodation.rating}
       
        </div>
      ))}
    </div>
  );
}

export default Rough2;

*/

/*

// exact location of accomidation
import React, { useState, useEffect } from "react";
import axios from "axios";

function Rough2() {
  const [userCity, setUserCity] = useState("hyderabad"); // Set default city to Hyderabad
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        // Fetch coordinates for the user-entered city
        const cityCoords = await getCityCoordinates(userCity);

        // Fetch accommodations around the user-entered city coordinates
        const apiKey = '5ae2e3f221c38a28845f05b6d63373a3a7200d5edd9e4bd581e3b7c3'; // Replace with your actual API key
        const radius = 10000; // Adjust the radius as needed

        const accommodationUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${cityCoords.lon}&lat=${cityCoords.lat}&kinds=accomodations&apikey=${apiKey}`;

        const response = await axios.get(accommodationUrl);

        // Handle the response data and extract accommodation information
        const accommodations = response.data.features.map(accommodation => ({
          name: accommodation.properties.name,
          rating: accommodation.properties.rate || 0,
          location: {
            lon: accommodation.geometry.coordinates[0],
            lat: accommodation.geometry.coordinates[1],
          },
          // Extract other relevant information as needed
        }));

        // Sort the accommodations by rating in descending order and get the top 50
        const sortedAccommodations = accommodations.sort((a, b) => b.rating - a.rating).slice(0, 50);

        setAccommodations(sortedAccommodations);
      } catch (error) {
        console.error('Error fetching accommodation data from OpenTripMap API:', error);
      }
    };

    // Fetch accommodations when the component mounts or userCity changes
    fetchAccommodations();
  }, [userCity]); // Run the effect when userCity changes

  const getCityCoordinates = async (city) => {
    try {
      const apiKey = '5ae2e3f221c38a28845f05b6d63373a3a7200d5edd9e4bd581e3b7c3'; // Replace with your actual API key
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

  // Render the accommodation details
  return (
    <div className="">
      {accommodations.map((accommodation, index) => (
        <div key={index}>
          {accommodation.name} - Rating: {accommodation.rating} - Location: {accommodation.location.lat}, {accommodation.location.lon}
         
        </div>
      ))}
    </div>
  );
}

export default Rough2;
*/


/*
 // Accomidation details
import React, { useState, useEffect } from "react";
import axios from "axios";

function Rough2() {
  const [userCity, setUserCity] = useState("hyderabad"); // Set default city to Hyderabad
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        // Fetch coordinates for the user-entered city
        const cityCoords = await getCityCoordinates(userCity);

        // Fetch accommodations around the user-entered city coordinates
        const apiKey = '5ae2e3f221c38a28845f05b6d63373a3a7200d5edd9e4bd581e3b7c3'; // Replace with your actual API key
        const radius = 10000; // Adjust the radius as needed

        const accommodationUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${cityCoords.lon}&lat=${cityCoords.lat}&kinds=accomodations&apikey=${apiKey}`;

        const response = await axios.get(accommodationUrl);

        // Handle the response data and extract accommodation information
        const accommodations = response.data.features.map(accommodation => ({
          name: accommodation.properties.name,
          rating: accommodation.properties.rate || 0,
          // Extract other relevant information as needed
        }));

        // Sort the accommodations by rating in descending order and get the top 50
        const sortedAccommodations = accommodations.sort((a, b) => b.rating - a.rating).slice(0, 30);

        setAccommodations(sortedAccommodations);
      } catch (error) {
        console.error('Error fetching accommodation data from OpenTripMap API:', error);
      }
    };

    // Fetch accommodations when the component mounts or userCity changes
    fetchAccommodations();
  }, [userCity]); // Run the effect when userCity changes

  const getCityCoordinates = async (city) => {
    try {
      const apiKey = '5ae2e3f221c38a28845f05b6d63373a3a7200d5edd9e4bd581e3b7c3'; // Replace with your actual API key
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

  // Render the accommodation details
  return (
    <div className="">
      {accommodations.map((accommodation, index) => (
        <div key={index}>
          {accommodation.name} - Rating: {accommodation.rating}
        </div>
      ))}
    </div>
  );
}

export default Rough2;
*/

/*
import "./Traveldetails.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState, useEffect } from "react";
import axios from "axios";


function Traveldetails() {
  const [userCity, setUserCity] = useState("hyderabad"); // Set default city to Hyderabad
  const [touristPlaces, setTouristPlaces] = useState([]);

  useEffect(() => {
    const fetchTouristPlaces = async () => {
      try {
        // Fetch coordinates for the user-entered city
        const cityCoords = await getCityCoordinates(userCity);

        // Fetch tourist places around the user-entered city coordinates
        const apiKey = '5ae2e3f221c38a28845f05b6d63373a3a7200d5edd9e4bd581e3b7c3';
        const radius = 10000; // Adjust the radius as needed

        const apiUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${cityCoords.lon}&lat=${cityCoords.lat}&apikey=${apiKey}`;

        const response = await axios.get(apiUrl);

        // Handle the response data and extract tourist places information
        const places = response.data.features.map(place => ({
          name: place.properties.name,
          rating: place.properties.rate || 0, // Use 0 as default rating if not available
          // Extract other relevant information as needed
        }));

        // Sort the places by rating in descending order and get the top 20
        const sortedPlaces = places.sort((a, b) => b.rating - a.rating).slice(0, 20);

        setTouristPlaces(sortedPlaces);
      } catch (error) {
        console.error('Error fetching data from OpenTripMap API:', error);
      }
    };

    // Fetch tourist places when the component mounts or userCity changes
    fetchTouristPlaces();
  }, [userCity]); // Run the effect when userCity changes

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

  // Accomidation code:  
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        // Fetch coordinates for the user-entered city
        const cityCoords = await getCityCoordinates(userCity);

        // Fetch accommodations around the user-entered city coordinates
        const apiKey = '5ae2e3f221c38a28845f05b6d63373a3a7200d5edd9e4bd581e3b7c3'; // Replace with your actual API key
        const radius = 10000; // Adjust the radius as needed

        const accommodationUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${cityCoords.lon}&lat=${cityCoords.lat}&kinds=accomodations&apikey=${apiKey}`;

        const response = await axios.get(accommodationUrl);

        // Handle the response data and extract accommodation information
        const accommodations = response.data.features.map(accommodation => ({
          name: accommodation.properties.name,
          rating: accommodation.properties.rate || 0,
          // Extract other relevant information as needed
        }));

        // Sort the accommodations by rating in descending order and get the top 50
        const sortedAccommodations = accommodations.sort((a, b) => b.rating - a.rating).slice(0, 30);

        setAccommodations(sortedAccommodations);
      } catch (error) {
        console.error('Error fetching accommodation data from OpenTripMap API:', error);
      }
    };

    // Fetch accommodations when the component mounts or userCity changes
    fetchAccommodations();
  }, [userCity]); // Run the effect when userCity changes


  return (
    <>

      <div className="travelout">
        <div className="row vits">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem", maxHeight: "25rem", overflow: "scroll" }}>
              <div className="card-header " ><h6>Places to Visit</h6></div>
              <div className="card-body">

                {touristPlaces.map((place, index) => (


                  <div key={index}>


                    {place.name} 

                  </div>

                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem", maxHeight: "25rem", overflow: "scroll" }}>
              <div className="card-header">Header</div>
              <div className="card-body">
                {accommodations.map((accommodation, index) => (
                  <div key={index}>
                    {accommodation.name} - Rating: {accommodation.rating}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Dark card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Dark card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
  const [userCity, setUserCity] = useState("hyderabad");
  const [touristPlaces, setTouristPlaces] = useState([]);
  const [accommodations, setAccommodations] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cityCoords = await getCityCoordinates(userCity);
        const apiKey = '5ae2e3f221c38a28845f05b6d63373a3a7200d5edd9e4bd581e3b7c3'; // Replace with your actual API key
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
          // Extract other relevant information as needed
        }));
        setRestaurants(restaurants);
      } catch (error) {
        console.error('Error fetching data from OpenTripMap API:', error);
      }
    };

    fetchData();
  }, [userCity]);

  const getCityCoordinates = async (city) => {
    try {
      const apiKey = '5ae2e3f221c38a28845f05b6d63373a3a7200d5edd9e4bd581e3b7c3'; // Replace with your actual API key
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
        <div className="row vits">
        
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem", maxHeight: "25rem", overflow: "scroll" }}>
              <div className="card-header"><h6>Places to Visit</h6></div>
              <div className="card-body">
                {touristPlaces.map((place, index) => (
                  <div key={index}>
                    {place.name} - Rating: {place.rating}
                  </div>
                ))}
              </div>
            </div>
          </div>

         
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem", maxHeight: "25rem", overflow: "scroll" }}>
              <div className="card-header">Accommodation Details</div>
              <div className="card-body">
                {accommodations.map((accommodation, index) => (
                  <div key={index}>
                    {accommodation.name} - Rating: {accommodation.rating}
                  </div>
                ))}
              </div>
            </div>
          </div>

   
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem", maxHeight: "25rem", overflow: "scroll" }}>
              <div className="card-header"><h6>Restaurants</h6></div>
              <div className="card-body">
                {restaurants.map((restaurant, index) => (
                  <div key={index}>
                    {restaurant.name}
                   
                  </div>
                ))}
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
  const [userCity, setUserCity] = useState("hyderabad");
  const [touristPlaces, setTouristPlaces] = useState([]);
  const [accommodations, setAccommodations] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cityCoords = await getCityCoordinates(userCity);
        const apiKey = '5ae2e3f221c38a28845f05b6d63373a3a7200d5edd9e4bd581e3b7c3'; // Replace with your actual API key
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
      const apiKey = '5ae2e3f221c38a28845f05b6d63373a3a7200d5edd9e4bd581e3b7c3'; // Replace with your actual API key
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
        <div className="row vits">
          
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem", maxHeight: "25rem", overflow: "scroll" }}>
              <div className="card-header"><h6>Places to Visit</h6></div>
              <div className="card-body">
                {touristPlaces.map((place, index) => (
                  <div key={index}>
                    {place.name} - Rating: {place.rating}
                  </div>
                ))}
              </div>
            </div>
          </div>

     
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem", maxHeight: "25rem", overflow: "scroll" }}>
              <div className="card-header">Accommodation Details</div>
              <div className="card-body">
                {accommodations.map((accommodation, index) => (
                  <div key={index}>
                    {accommodation.name} - Rating: {accommodation.rating}
                  </div>
                ))}
              </div>
            </div>
          </div>

         
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "20rem", maxHeight: "25rem", overflow: "scroll" }}>
              <div className="card-header"><h6>Restaurants</h6></div>
              <div className="card-body">
                {restaurants.map((restaurant, index) => (
                  <div key={index}>
                    {restaurant.name} 
            
                  </div>
                ))}
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
