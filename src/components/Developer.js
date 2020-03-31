import React, { Component } from 'react';

class Developers extends Component {
    render() {
        return (
            <div id="developer" className="container-fluid developerDiv">
                <h3 align="center" style={{ marginBottom: "30px", marginTop: "10px", fontFamily: `'Montserrat', sans-serif`, letterSpacing: "5px", fontWeight: "500" }}>Developers</h3>
                <h6 align="center" style={{ marginBottom: "30px", marginTop: "10px", fontFamily: `'Montserrat', sans-serif`, letterSpacing: "5px", fontWeight: "300" }}>Students of Government Engineering College, Thrissur</h6>
                <div style={{ textAlign: "center" }}>
                    <div className="developer"><span onClick={event => window.location.href = "http://github.com/dkowsikpai"}><i className="fa fa-github"></i> Kowsik Nandagopan D<br />(IEEE SB GECT Chief Webmaster)</span><br></br></div>
                    <div className="developer"><span onClick={event => window.location.href = "https://github.com/ajaysram/"}><i className="fa fa-github"></i> Ajay S Ram</span><br></br></div>
                    <div className="developer"><span onClick={event => window.location.href = "https://github.com/calvinwilson99"}><i className="fa fa-github"></i> Calvin Wilson<br />(IEEE SB GECT Joint Webmaster)</span><br></br></div>
                    <div className="developer"><span onClick={event => window.location.href = "https://github.com/navaneethsdk"}><i className="fa fa-github"></i> Navaneeth D</span><br></br></div>
                    <div className="developer">
                        <h6 className="text-muted" style={{ marginBottom: "30px" }}>
                            Disclaimer <br /> We have not violated any copyrights, All the images and source code are open source licensed under MIT or GNU.<br />
                            Contact developers for more information
                        </h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default Developers;