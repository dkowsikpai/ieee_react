import React from 'react';
import './static/main.css';
import CountUp from 'react-countup';

import standoutImg from './static/images/stand_out.svg';
import ieeeImg from './static/images/ieee.png';


import bioImg from './static/images/bio.svg';

import peopleImg from './static/images/people.svg';
import defaultManImg from './static/images/defaultM.jpg';


class App extends React.Component{
    render() {
        return (
            <div className="row">
                <Header/>
                <About/>
                <Counter/>
                <Execome/>
            </div>
        );
    }


}

class Header extends React.Component{
    render() {
        return(
            <div className="container-fluid">
                <div className="row m-3">
                    <div className="col-lg-3 custMenu"  data-tag='home' >Home</div>
                    <div className="col-lg-3 custMenu"  data-tag='gallery' >Gallery</div>
                    <div className="col-lg-3 custMenu"  data-tag='execom'>Execom</div>
                    <div className="col-lg-3 custMenu"  data-tag='act'>Activities</div>
                </div>
                <div className="row">
                    <img src={ieeeImg} alt="ieee" style={{margin: "3vh"}} />
                    <img src={standoutImg} alt="commity" width="100%" height="100%" align="right" className="mt-3 logoIllustration" style={{ position: "absolute", marginLeft: "10vw"}}/>
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

class About extends React.Component{
    render() {
        return(
            <div className="container-fluid" style={{marginTop: "40vh"}}>
                <img src={bioImg} alt="Bio" className="aboutIllustration"/>
                <h4 className="aboutText">
                    Government Engneering College, Thrissur <br/> is one of the most prestigious institutions in Kerala.
                </h4>
            </div>
        );
    }
}


class Counter extends React.Component{
    render() {
        return(
            <div className="container-fluid">
                <div className="row counterDiv">
                    <div className="col-lg-3">
                        <h3>Members</h3>
                        <h4><CountUp end={150}/></h4>
                    </div>
                    <div className="col-lg-3">
                        <h3>Awards</h3>
                        <h4><CountUp end={20} /></h4>
                    </div>
                    <div className="col-lg-3">
                        <h3>Societies</h3>
                        <h4><CountUp end={10} /></h4>
                    </div>
                    <div className="col-lg-3">
                        <h3>Events</h3>
                        <h4><CountUp end={50} /></h4>
                    </div>
                </div>
                <hr className="style-one"/>
            </div>
        );
    }
}


class Execome extends React.Component{
    render() {
        return (
            <div className="container-fluid">
                <h1 className="person" style={{marginBottom: "30px", fontFamily: `'Montserrat', sans-serif`,  letterSpacing: "5px"}}>Execom Members</h1>
                <img src={peopleImg} alt="people"  align="right" className="peopleIllustration"/>
                <div className="row mobViewExecome">
                    <div className="person pl">
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



export default App;

