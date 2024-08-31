import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

//import Home from "./Home";
import Travdet from "./Travdet";
import Signup from "./Signup";
import Signin from "./Signin";
import Contact from "./Contact";
import "./App.css";

function Navbar2() {
  
 
    return (


        <div className="nbr">
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <div className="dflex ">
                        <a class="navbar-brand " href="#" >Help Desk</a>


                        <Link className=" navbar-brand " aria-current="page" to="/" style={{ color: '#86B6F6' }}>Home</Link>

                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar2;
