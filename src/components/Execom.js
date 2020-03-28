import peopleImg from '../static/images/people.svg';
import defaultManImg from '../static/images/defaultM.jpg';
import React from "react";

class Execom extends React.Component{
    render() {
        return (
            <div className="container-fluid" style={{marginTop: "10vh"}}>
                <h1 className="person" style={{marginBottom: "30px", fontFamily: `'Montserrat', sans-serif`, fontWeight: "300",  letterSpacing: "5px"}}>Execom Members</h1>
                <img src={peopleImg} alt="people"  align="right" className="peopleIllustration"/>
                <div className="row mobViewExecome">
                    <div className="person top pl">
                        <img src={defaultManImg} alt="member" width="150px" height="150px" style={{borderRadius: "100%", marginLeft: "30px"}}/>
                        <h5 style={{fontFamily: `'Montserrat', sans-serif`, marginTop: "5px"}}>Kowsik Nandagopan</h5>
                    </div>
                    <div className="person pr">
                        <img src={defaultManImg} alt="member" width="150px" height="150px" style={{borderRadius: "100%"}}/>
                        <h5 style={{fontFamily: `'Montserrat', sans-serif`, marginTop: "5px"}}>Navaneeth D</h5>
                    </div>
                </div>
                <div className="row mobViewExecome">
                    <div className="person pl">
                        <img src={defaultManImg} alt="member" width="150px" height="150px" style={{borderRadius: "100%", marginLeft: "30px"}}/>
                        <h5 style={{fontFamily: `'Montserrat', sans-serif`, marginTop: "5px"}}>Ganesh</h5>
                    </div>
                    <div className="person pr">
                        <img src={defaultManImg} alt="member" width="150px" height="150px" style={{borderRadius: "100%"}}/>
                        <h5 style={{fontFamily: `'Montserrat', sans-serif`, marginTop: "5px"}}>Abijith</h5>
                    </div>
                </div>
                <div className="row" style={{textAlign: "center"}}>
                    <button className="morePeopleBtn" >Other Members</button>
                </div>
            </div>
        );
    }
}

export default Execom;