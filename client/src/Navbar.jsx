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

function Navbar() {
  
 

    
    const [navbarOpen, setNavbarOpen] = useState(false);

    // Function to toggle the visibility of the navbar
    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    // Function to close the navbar
    const closeNavbar = () => {
        setNavbarOpen(false);
    };


    return (


        <div className="nbr">
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <div className="dflex ">
                        <a class="navbar-brand " href="#" >Help Desk</a>


                        <Link className=" navbar-brand " aria-current="page" to="/" style={{ color: '#86B6F6' }}>Home</Link>

                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        {/* 
                        <div >

                            <h5 action="/getuser" className="offcanvas-title" id="offcanvasDarkNavbarLabel" >{"Hello"+userName}</h5>
                        </div>
                        */ }
                        <div className="offcanvas-header">
                            <h6 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Explore Your Journey Here ...</h6>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                               {/*
                                <li class="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Profile
                                    </a>
                                    <ul className="dropdown-menu">
                                    
                                        <li><p className="dropdown-item">A</p></li>
                                        <li><p className="dropdown-item">c</p></li>

                                    </ul>
                                </li>
                                 */}
                                <li className="nav-item ">
                                    <Link className=" nav-link" to="/Travel" >Travel</Link>
                                </li>

                                <li class="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Education
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">A</a></li>
                                        <li><a className="dropdown-item">B</a></li>
                                        <li><a className="dropdown-item" href="#">C</a></li>
                                        <li><a className="dropdown-item" href="#">D</a></li>

                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Bussiness Ideas
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">E</a></li>
                                        <li><a className="dropdown-item">F</a></li>
                                        <li><a className="dropdown-item" href="#">G</a></li>
                                        <li><a className="dropdown-item" href="#">H</a></li>

                                    </ul>
                                </li>
                                <li className="nav-item">


                                    <Link className="nav-link" to="/Contact" >Contact Us</Link>
                                </li>

                            </ul>
                            {
                                /* 
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 log">
                                <div className="dflex " >

                                    <Link to="/Signin"  ><button type="button" class="btn btn-outline-primary">Sign In</button></Link>


                                    <Link to="/Signup" style={{marginLeft:"20px"}}><button type="button" class="btn btn-outline-primary">Sign Up</button></Link>
                                </div>
                            </ul>
                            */
                            }
                            <div className="ms"> <a class="navbar-brand" href="#">Help Desk</a></div>



                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
