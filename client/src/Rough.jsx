import React, { useState, useEffect } from "react";
import axios from "axios";

function Rough() {
  const [userCity, setUserCity] = useState("");
  const [touristPlaces, setTouristPlaces] = useState([]);

  useEffect(() => {
    const fetchTouristPlaces = async () => {
      try {
        // Fetch coordinates for the user-entered city
        const cityCoords = await getCityCoordinates(userCity);

        // Fetch tourist places around the city coordinates
        const apiKey = 'YOUR_OPEN_TRIP_MAP_API_KEY';
        const radius = 5000; // Adjust the radius as needed

        const apiUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${cityCoords.lon}&lat=${cityCoords.lat}&kinds=tourist_objects&apikey=${apiKey}`;

        const response = await axios.get(apiUrl);

        // Handle the response data and extract tourist places information
        const places = response.data.features.map(place => ({
          name: place.properties.name,
          // Extract other relevant information as needed
        }));

        setTouristPlaces(places);
        console.log(touristPlaces);
      } catch (error) {
        console.error('Error fetching data from OpenTripMap API:', error);
      }
    };

    if (userCity) {
      fetchTouristPlaces();
    }
  }, [userCity]); // Run the effect when userCity changes

  const getCityCoordinates = async (city) => {
    const apiKey = 'YOUR_OPEN_TRIP_MAP_API_KEY';
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
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter city name"
          value={userCity}
          onChange={(e) => setUserCity(e.target.value)}
        />
      </div>

      <div className="svrc">
        {/* Your component JSX */}
        {touristPlaces.map((place, index) => (
          <div key={index}>
            {place.name}
            {/* Render other information about the place */}
          </div>
        ))}
      </div>
    </>
  );
}

export default Rough;
