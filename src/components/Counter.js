import React from "react";
import CountUp from "react-countup";

import data from '../data';

let styleHead = { fontFamily: `'Montserrat', sans-serif`, fontWeight: "900" };
let styleNum = { fontFamily: `'Montserrat', sans-serif`, fontWeight: "500" };


class Counter extends React.Component {
    render() {
        return (
            <div className="container-fluid counterDiv" >
                <div className="row ">
                    <div className="col-lg-3">
                        <h3 style={styleHead}>Members</h3>
                        <h4 style={styleNum}><CountUp end={data.counter.members} /></h4>
                    </div>
                    <div className="col-lg-3">
                        <h3 style={styleHead}>Awards</h3>
                        <h4 style={styleNum}><CountUp end={data.counter.awards} /> +</h4>
                    </div>
                    <div className="col-lg-3">
                        <h3 style={styleHead}>Societies</h3>
                        <h4 style={styleNum}><CountUp end={data.counter.societies} /></h4>
                    </div>
                    <div className="col-lg-3">
                        <h3 style={styleHead}>Events</h3>
                        <h4 style={styleNum}><CountUp end={data.counter.events} /> +</h4>
                    </div>
                </div>
                <hr className="style-one" />
            </div>
        );
    }
}

export default Counter;