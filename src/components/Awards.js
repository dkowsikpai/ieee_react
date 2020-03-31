import React, { Component } from 'react'
import winnerImg from '../static/images/winners.svg';
import giftImg from '../static/images/gifts.svg';
import finishlineImg from '../static/images/finish_line.svg';

// import data from '../data';
// import ReactHtmlParser from 'react-html-parser';

export class Awards extends Component {
    render() {
        return (
            <div id="awards" className="container-fluid awardDiv">
                {/* <hr className="style-one" /> */}
                <h1 align="center" style={{ marginBottom: "30px", fontFamily: `'Montserrat', sans-serif`, letterSpacing: "5px", fontWeight: "500" }}>Awards</h1>
                <div className="row">
                    <div className="awardsText-tl top">
                        <h3>2016</h3> <h6>Outstanding IEEE Student Branch, Kerala Section<br /><br /> Outstanding Initiative Award - Humanoid (Nived Johny, Shyam Pradeep)<br /><br />Best Student Volunteer Award(Humanitarian) - Nived Johny and Shyam Pradeep (Humanoid)<br /><br />Special Appreciation Award for Student Volunteer- Swaraj P, Sahaj K</h6> <br />
                    </div>
                    <img className="awardsIllustration-tl top" src={winnerImg} alt="winners" />
                </div>
                <div className="row">
                    <div className="awardsText-tr">
                        <h3>2015</h3> <h6>Outstanding IEEE Student Branch (Kochi Subsection)<br /><br />Represented Student Branch at R10 Congress, Colombo-Sri Lanka<br /><br />Represented Student Branch at WIE International Leadership Conference, California-USA</h6><br />

                        <h3>2014</h3> <h6>Outstanding IEEE Student Branch Counsellor(Kerala Section) - Dr.K.Meenakshy<br /><br />Outstanding WIE Volunteer Award - Aparna U Nair</h6> <br />
                    </div>
                    <img className="awardsIllustration-tr" src={giftImg} alt="winners" />
                </div>
                <div className="row">
                    <div className="awardsText-tl">
                        <h3>2013</h3> <h6>Outstanding WIE Volunteer Award - Divya Nair</h6> <br />
                        <h3>2012</h3> <h6>Outstanding WIE Volunteer Award - Preethy Warrier</h6> <br />
                    </div>
                    <img className="awardsIllustration-tl" src={finishlineImg} alt="winners" />
                </div>
            </div >
        );
    }
}

export default Awards;
