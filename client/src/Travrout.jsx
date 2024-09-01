import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";
import Home from "./Home";
import Travel from "./Travel";
import Traveldetails from "./Traveldetails";
//import Travdet from "./Travdet";
import Signin from "./Signin";
import Signup from "./Signup";
import Navbar from "./Navbar";
import Contact from "./Contact";


function Travrout() {
    return (
        <>

            <Router>
               
                <Routes>
                    <Route path="/" element={<Signin />}></Route>
                    <Route path="/Signup" element={<Signup />}></Route>
                    <Route path="/Signin" element={<Signin />}></Route>
                    <Route path="/Home" element={<Home/>}></Route>
                    <Route path="/Travel" element={<Travel />}></Route>
                    <Route path="/Traveldetails" element={<Traveldetails />}></Route>
                    <Route path="/Contact" element={<Contact />}></Route>
                    {/* 
                    <Route path="/Travdet" element={<Travdet />}></Route>
                    */}
                    
                </Routes>
            </Router>
        </>
    );
}
export default Travrout;