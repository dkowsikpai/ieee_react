import React from "react";
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    // Link
} from "react-router-dom";

// import Header from './Header';
// import About from './About';
// import Counter from './Counter';
// import Execom from './Execom';
// import Awards from './Awards';
// import Activity from './Activity';

const LinkStyle = { color: "#000", textDecoration: "none" };

class Nav extends React.Component {
    render() {
        let classReq = (this.props.home === "true") ? "col-lg-2 custMenu nonhome" : "noNav";
        return (
            <Router>
                <div className="container-fluid ">
                    <div className="row mt-3 ">
                        <a href="/" className={(this.props.home === "true") ? "col-lg-2 custMenu nonhome" : "col-lg-12 custMenu"} style={LinkStyle} data-tag='home' >Home</a>
                        <a href="#awards" className={classReq} style={LinkStyle} data-tag='execom'>Awards</a>
                        <a href="#activities" className={classReq} style={LinkStyle} data-tag='act'>Activities</a>
                        <a href="#gallery" className={classReq} style={LinkStyle} data-tag='gallery' >Gallery</a>
                        <a href="#execom" className={classReq} style={LinkStyle} data-tag='execom'>Execom</a>
                        <a href="#contactus" className={classReq} style={LinkStyle} data-tag='execom'>Contact Us</a>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Nav;