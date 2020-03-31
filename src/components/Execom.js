import peopleImg from '../static/images/people.svg';
import React from "react";
import ReactDOM from "react-dom";
import SeemoreMembers from './SeemoreMembers';


class Execom extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        ReactDOM.render(<SeemoreMembers />, document.getElementById("root"));
    }

    render() {
        return (
            <div id="execom" className="container-fluid" style={{ marginTop: "10vh" }}>
                <hr className="style-one" />
                <h1 className="execomTextHeading" align="center" style={{ marginBottom: "30px", fontFamily: `'Montserrat', sans-serif`, fontWeight: "500", letterSpacing: "5px" }}>Execom Members</h1>
                <img src={peopleImg} alt="people" align="right" className="peopleIllustration" />
                <div className="row" style={{ textAlign: "center", marginTop: "30px" }}>
                    <button className="morePeopleBtn" onClick={this.handleClick}>Members and Contacts&nbsp;<i style={{ fontSize: "18px" }} class="fa">&#xf061;</i></button>
                </div>
            </div>
        );
    }
}

export default Execom;