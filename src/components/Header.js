import standoutImg from '../static/images/stand_out1.svg';
import ieeeImg from '../static/images/ieee.png';
import gectImg from '../static/images/gectlogo.png';
import React from "react";

import Nav from './Nav';

class Header extends React.Component{
    render() {
        return(
            <div className="container-fluid">
                <Nav/>
                <div className="row">
                    <img src={ieeeImg} alt="ieee" style={{margin: "3vh"}} />
                    <img src={standoutImg} alt="commity"  align="right" className="logoIllustration" style={{ position: "absolute"}}/>
                    <img src={gectImg} alt="commity"  align="right" className="gectlogo" style={{ position: "absolute"}}/>
                </div>
                <div className="row">
                    <div className="text-anim m-5">
                        <h1 style={{fontFamily: `'Montserrat', sans-serif`, fontWeight: "bold"}}>GEC, Thrissur</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;