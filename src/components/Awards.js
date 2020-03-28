import React, { Component } from 'react'
import winnerImg from '../static/images/winners.svg';
import giftImg from '../static/images/gifts.svg';
import finishlineImg from '../static/images/finish_line.svg';

import data from '../data';
import ReactHtmlParser from 'react-html-parser';

export class Awards extends Component {
    render(){
        return (
            <div className="container-fluid">
                <h1 className="person" style={{marginBottom: "30px", fontFamily: `'Montserrat', sans-serif`,  letterSpacing: "5px", fontWeight: "300"}}>Awards</h1>
                <div className="row">
                    <p className="awardsText-tl top">{ReactHtmlParser(data.awards.sec1)}</p>
                    <img className="awardsIllustration-tl top" src={winnerImg} alt="winners"/>
                </div>
                <div className="row">
                    <p className="awardsText-tr">{ReactHtmlParser(data.awards.sec2)}</p>
                    <img className="awardsIllustration-tr" src={giftImg} alt="winners"/>
                </div>
                <div className="row">
                    <p className="awardsText-tl">{ReactHtmlParser(data.awards.sec3)}</p>
                    <img className="awardsIllustration-tl" src={finishlineImg} alt="winners"/>
                </div>
            </div>
        );
    }
}

export default Awards;
