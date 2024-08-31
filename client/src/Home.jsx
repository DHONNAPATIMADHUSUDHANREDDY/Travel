import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css";
import hands from "./images/hands.png";

function Home() {
    return (
        <>
         <Navbar />
            <div className="tot" style={{ backgroundImage: 'linear-gradient(to right,#118AB2 ,#06D6A0 )' }}>
                <div className="home1" >

                    <div>
                        <div className="homebackg" >
                            <div className="homequote"style={{display:"flex",justifyContent:"center"}}> 
                                <p>Here we are to help you search...</p>
                            </div>
                        </div>
                    </div>
                    <div className="home3 ">
                        <div className="ho1">
                            <h5>Who We Are ?</h5>
                            <p>We are a dynamic team passionate about travel, education, and business. Our identity lies in crafting unique experiences tailored to your needs.</p>
                        </div>
                        <div class="ho3">
                            <h5>How We Are Working ?</h5>
                            <p>We blend creativity and efficiency to provide seamless services, ensuring unforgettable journeys, valuable learning experiences, and successful business ventures.</p>
                        </div>
                        <div className="ho2">
                            <h5>What We Do ?</h5>
                            <p>We curate comprehensive travel packages, deliver insightful educational content, and offer personalized business ideas aligned with your budgetary goals.</p>
                        </div>
                        <Footer />

                    </div>




                </div>

            </div>
        </>
    );
}
export default Home;