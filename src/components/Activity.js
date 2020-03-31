import React from 'react';
import RightCard from './LeftCard';
import LeftCard from './RightCard';
import activityImg from '../static/images/activity.svg';

import data from '../data';

class Activity extends React.Component {
    render() {
        return (
            <div id="activities" className="container-fluid" style={{ marginTop: "30vh" }}>
                <hr className="style-one" />
                <div className="sectionHeading" style={{ textAlign: "center !important" }}>
                    <h1 className="person" style={{ textAlign: "center", fontFamily: `'Montserrat', sans-serif`, letterSpacing: "5px", fontWeight: "500" }}>Activity & Events</h1>
                </div>
                <img src={activityImg} alt="" className="acitivityIllustration" />
                <div className="row activityContainer">
                    <section id="timeline" >
                        <LeftCard title={data.activity[0].title} content={data.activity[0].content} day={data.activity[0].day} sp={data.activity[0].sp} month={data.activity[0].month} year={data.activity[0].year} />
                        <RightCard title={data.activity[1].title} content={data.activity[1].content} day={data.activity[1].day} sp={data.activity[1].sp} month={data.activity[1].month} year={data.activity[1].year} />
                        <LeftCard title={data.activity[2].title} content={data.activity[2].content} day={data.activity[2].day} sp={data.activity[2].sp} month={data.activity[2].month} year={data.activity[2].year} />
                    </section>
                </div>
                <div style={{ textAlign: "center", visibility: "hidden" }}>
                    <button className="moreGalleryBtn">See More</button>
                </div>
            </div>
        );
    }
}

export default Activity;