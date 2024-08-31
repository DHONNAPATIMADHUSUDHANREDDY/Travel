import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Signin from './Signin';
import Navbar2 from "./Navbar2";

import { useNavigate } from 'react-router-dom';

import "./Login.css";

function Signup() {
  // State to manage form data
  const [formData, setFormData] = useState({
    user_name: "",
    full_name: "",
    email: "",
    phone_number: "",
    user_password: "",
  });

  const navigate=useNavigate();
  const handleChange = (e) => {
    // Update form data as the user types
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
   
    navigate('/Signin');
    if(!formData.full_name.trim()){
      alert("Enter FullName");
      return;
    }
    if(!formData.user_name.trim()){
      alert("Enter UserName");
      return;
    }
    if(!formData.email.trim()){
      alert("Enter Email Address");
      return;
    
      }
      if(!formData.phone_number.trim()){
        alert("Enter Phone Number");
        return;
      }
      if(!formData.user_password.trim()){
        alert("Enter Password");
        return;
      }
      alert("Account Successfully Created");
     

    try {
      const response = await fetch("http://localhost:4000/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data saved successfully");
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <> <Navbar2 />
    <form>
      <div className="Signs">
        <div className="signup">
          <div className="row">
            <h3 style={{ marginBottom: "30px" }}>SignUp</h3>
            <div className="col-sm-12 col-md-6 col-lg-6 signupcon">
              <input
                className="form-control signupcon"
                type="text"
                name="full_name"
                placeholder="Enter Full Name"
                onChange={handleChange}
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 signupcon">
              <input
                className="form-control"
                type="text"
                name="user_name"
                placeholder="Enter User Name "
                onChange={handleChange}
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 signupcon">
              <input
                className="form-control"
                type="text"
                name="email"
                placeholder="Enter Your Email Here..."
                onChange={handleChange}
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 signupcon">
              <input
                className="form-control"
                type="text"
                name="phone_number"
                placeholder="Enter Your Phone Number Here... "
                onChange={handleChange}
              />
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 signupcon">
              <input
                className="form-control signupcon"
                type="text"
                name="user_password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 signupcon">
              <input
                className="form-control signupcon"
                type="text"
                placeholder="Confirm Password"
              />
            </div>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
    </>
  );
}

export default Signup;

