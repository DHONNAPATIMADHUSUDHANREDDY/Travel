import React from "react";
import "./Contact.css";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

function Contact() {

    return (
        <>
            <div className="ContactFrames" style={{ display: "grid", gridTemplateColumns: "1fr 1fr ", height: "100vh" }}>
                <div style={{ background: 'linear-gradient(to right,#124076,#E5DDC5)', display: "flex", alignItems: "center", justifyContent: "center" }} >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <a href="https://www.facebook.com/dhonnapati.madhu" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon className="icon1" style={{ color: "#FFFFFF", fontSize: 40, marginBottom: "10px" }} />
                        </a>
                        <a href="https://instagram.com/ms_reddy16" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon className="icon2" style={{ color: "#fff", fontSize: 40, marginBottom: "10px" }} />
                        </a>
                        <a href="mailto:msreddy7075@gmail.com" target="_blank" rel="noopener noreferrer">
                            <MailIcon className="icon3" style={{ color: "#fff", fontSize: 40, marginBottom: "10px" }} />
                        </a>
                        <a href="tel:7075428693" target="_blank" rel="noopener noreferrer">
                            <PhoneInTalkIcon className="icon4" style={{ color: "#fff", fontSize: 40, marginBottom: "10px" }} />
                        </a>
                    </div>
                </div>

                <div style={{ background: 'linear-gradient(to left,#003C43,#E5DDC5)', display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{}}>
                        <p className="fontst">"Discover, Connect, and Plan your Travels Effortlessly. Contact us for tailored Adventures."</p>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Contact;