import React from 'react';
import ReactModal from 'react-modal';
import './static/main.css';
// import Particles from "react-particles-js";
//
import ieeeImg from './static/images/ieee.png';
import galleryImg from './static/images/gallery.png';
import awardImg from './static/images/award.png';
import activityImg from './static/images/activity.png';
import execomeImg from './static/images/execome1.png';
import aboutImg from './static/images/about.png';
import connectImg from './static/images/connect.png';
// import gecImg from './static/images/gec.png';
//
// import par from './components/particle';

class MainPage extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            show: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(props){
        console.log(props.target.getAttribute('data-tag'));
        if (this.state.show) {
            this.setState({
                show: false
            });
        } else {
            this.setState({
                show: true
            });
        }
    }

    render() {
        return (
            <div className="container-fluid" style={{ padding: "0", textAlign: "center" }}>

                <div className="row">
                    <div className="col-lg-12 mb-5" style={{textAlign: "center"}}>
                        <img src={ieeeImg} alt="IEEE" />
                        {/*<h1 className="IEEESans" style={{color: "#fff", textAlign: "center"}}>Government Engineering Collerge, Thrissur</h1>*/}
                    </div>
                </div>
                <div className="row mt-5" style={{fontFamily: `'Montserrat', sans-serif`}}>
                <nav className="menu ml-auto mr-auto mt-5">
                    <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" checked/>
                    <label className="menu-open-button" htmlFor="menu-open" style={{visibility: "hidden"}}>
                        {/*<span className="lines line-1"></span>*/}
                        {/*<span className="lines line-2"></span>*/}
                        {/*<span className="lines line-3"></span>*/}
                    </label>

                    <div  className="menu-item blue "  onClick={this.handleClick} data-tag='award' >
                        <img src={awardImg} alt="gallery" width="28" height="28" style={{marginRight: "3px"}} />
                        Awards
                    </div>
                    <div  className="menu-item green" onClick={this.handleClick} data-tag='act'>
                        <img src={activityImg} alt="gallery" width="28" height="28" style={{marginRight: "3px"}} />
                        Activities
                    </div>
                    <div  className="menu-item red" onClick={this.handleClick} data-tag='exe'>
                        <img src={execomeImg} alt="gallery" width="28" height="28" style={{marginRight: "3px"}} />
                        Execome
                    </div>
                    <div  className="menu-item purple" onClick={this.handleClick} data-tag='about'>
                        <img src={aboutImg} alt="gallery" width="28" height="28" style={{marginRight: "3px"}} />
                        About
                    </div>
                    <div  className="menu-item orange" onClick={this.handleClick} data-tag='contact'>
                        <img src={connectImg} alt="gallery" width="28" height="28" style={{marginRight: "3px"}} />
                        Connect
                    </div>
                    <div  className="menu-item lightblue" onClick={this.handleClick} data-tag='gallery'>
                        <img src={galleryImg} alt="gallery" width="28" height="28" style={{marginRight: "3px"}} />
                        Gallery
                    </div>
                </nav>
                </div>
                <ReactModal
                    isOpen={this.state.show}
                    contentLabel="Minimal Modal Example"
                >
                    <button onClick={this.handleClick}>Close Modal</button>
                </ReactModal>

            </div>
        );
    }


}

class Splash extends React.Component{
    render() {
        return(
            <div style={{textAlign: "center", margin: "auto"}}>
                <img src={ieeeImg} alt="ieee" />
            </div>
        );
    }
}


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            render: false,
            splash: true
        };
    }

    componentDidMount() {
        setTimeout(function() { //Start the timer
            this.setState({render: true}) //After 1 second, set render to true
        }.bind(this), 2000);

    }

    render() {
        let renderContainer;
        if(!this.state.render) { //If this.state.render == true, which is set to true by the timer.
            renderContainer = <Splash/> //Add dom elements
        } else {
            renderContainer =  <MainPage/>;
        }
        return (
            renderContainer
        );
    }


}


export default App;

