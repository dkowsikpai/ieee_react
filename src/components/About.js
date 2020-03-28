import bioImg from '../static/images/bio.svg';
import React from "react";

import data from '../data';
import ReactHtmlParser from 'react-html-parser';

class About extends React.Component{
    render() {
        return(
            <div className="container-fluid" style={{marginTop: "40vh"}}>
                <img src={bioImg} alt="Bio" className="aboutIllustration"/>
                <h4 className="aboutText">
                    {ReactHtmlParser(data.about)}
                </h4>
            </div>
        );
    }
}

export default About;