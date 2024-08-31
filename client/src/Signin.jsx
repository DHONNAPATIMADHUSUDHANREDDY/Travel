import React, { useState } from "react";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Signup from "./Signup";
import "./Login.css";

function Signin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async () => {
    const formData = {
      user_name: userName,
      user_password: password,
    };
    if (!formData.user_name.trim()) {
      alert("User Name Required ");
      return;
    }
    if (!formData.user_password.trim()) {
      alert("Password Required ");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // console.log("Sign-in successful");
        alert("Sign in successfull");
        navigate('/Home');
      } else {
        //console.error("Sign-in failed");
        alert("Sign in unsuccessfull");
      }
    } catch (error) {
      console.error("Error:", error);
    }

  };

  return (
    <>
      <form>
        <div className="Signbac">
          <div className="signup signin ">
            <div className="row total ">
              <div style={{ textAlign: "center" }}>
                <h3 style={{ marginBottom: "30px" ,marginTop:"20px"}}>SignIn</h3>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 signupcon">
                <input
                  className="form-control"
                  type="text"
                  name="user_name"
                  placeholder="Enter User Name"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 signupcon">
                <input
                  className="form-control signupcon"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSignIn}
                >
                  SignIn
                </button>
              </div>
              <div>
                <div>
                  <Link to="/Signup" style={{ color: '#fff', textDecoration: 'none' }}>
                    <p style={{ marginTop: '10px' }}>Help Desk? CreateAccount</p></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </form>
    </>
  );
}

export default Signin;

