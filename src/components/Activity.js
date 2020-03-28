import React from 'react';
import RightCard from './LeftCard';
import LeftCard from './RightCard';
import activityImg from '../static/images/activity.svg';

import data from '../data';

const Activity = () => {
    return(
        <div className="container-fluid" style={{marginTop: "40vh"}}>
            <div className="row" style={{textAlign: "center !important"}}>
                <h1 className="person" style={{textAlign: "center", fontFamily: `'Montserrat', sans-serif`,  letterSpacing: "5px", fontWeight: "300"}}>Activity & Events</h1>
                <img src={activityImg} alt="" className="acitivityIllustration"/>
            </div>
            <div className="row activityContainer">
                <section id="timeline" >
                <LeftCard title={data.activity[0].title} content={data.activity[0].content}/>
                <RightCard title={data.activity[1].title} content={data.activity[1].content}/>
            </section>
            </div>
        </div>
    );
};

export default Activity;