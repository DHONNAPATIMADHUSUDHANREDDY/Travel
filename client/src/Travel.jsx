import React from "react";
import "./Input.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import travel from "./images/travel.jpg";
import Navbar from "./Navbar";

function Travel() {
  const [placename, setpalcename] = useState({ place: "" });
  const navigate = useNavigate(); // Initialize useNavigate

  const handChange = (e) => {
    setpalcename({ ...placename, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {

    if (!placename.place.trim()) {
      alert("Please Enter CityName ");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/addplace", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(placename),
      });

      if (response.ok) {
        console.log("Data saved successfully");
        navigate("/traveldetails"); // Navigate to the /traveldetails route using navigate
      }
      else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <>
     <Navbar />
      <div style={{ backgroundImage: `url(${travel})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
        <div className="inputStyle" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: '100vh' }}>
          <div style={{ marginBottom: "10px" }}>
            <input className="form-control " type="text" name="place" placeholder="Enter city name" onChange={handChange} />
          </div>
          <div>
            <button className="btn btn-success" type="button" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Travel;



