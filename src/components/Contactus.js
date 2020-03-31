import React, { Component } from 'react';
import fbImg from '../static/images/fb.png';
import instaImg from '../static/images/insta.png';
import mapsImg from '../static/images/maps.png';


const imgStyle = {
    width: "64px",
    height: "64px",
    cursor: "pointer",
    margin: "15px"
};

export class ContactUs extends Component {
    render() {
        return (
            <div id="contactus" className="container-fluid contactudDiv">
                <hr className="style-one" />
                <h1 align="center" style={{ marginBottom: "30px", fontFamily: `'Montserrat', sans-serif`, letterSpacing: "5px", fontWeight: "500" }}>Contact Us</h1>
                <div style={{ textAlign: "center" }}>
                    <img onClick={event => window.location.href = "https://instagram.com/ieeesbgect?igshid=18x0fsuu8va89"} src={instaImg} alt="insta" style={imgStyle} />
                    <img onClick={event => window.location.href = "https://www.facebook.com/ieeesbgectcr/"} src={fbImg} alt="FB" style={imgStyle} />
                    <img onClick={event => window.location.href = "https://maps.google.co.in/maps?q=GECT,+Pandikkavu,+Trichur,+Kerala&hl=en&sll=10.54063,76.128318&sspn=9.677111,16.907959&oq=gect+tri&t=m&z=17&iwloc=A"} src={mapsImg} alt="location" style={imgStyle} />
                    <h6 className="text-muted" style={{ lineHeight: "1.5", fontFamily: `'Montserrat', sans-serif` }}>
                        IEEE Student Branch<br />
                        Government Engineering College <br />
                        Thrissur - 680 009, Kerala, India<br />
                        Email : ieeesb@gectcr.ac.in<br />
                        Chairman: vishnus@ieee.org<br />
                        Counsellor: josephkd@gectcr.ac.in<br />
                        College Office : 0487 - 233 4144<br />
                    </h6>
                </div>
            </div>
        );
    }
}

export default ContactUs;