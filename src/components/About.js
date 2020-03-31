import bioImg from '../static/images/bio.svg';
import archImg from '../static/images/arch.png'
import React from "react";
import ReactModal from "react-modal";

import data from '../data';
import ReactHtmlParser from 'react-html-parser';


class About extends React.Component {

    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div className="container-fluid aboutDiv">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <img src={bioImg} alt="Bio" className="aboutIllustration" />
                <img src={archImg} alt = "arch" className="archStyles" />
                {/*<h4 className="aboutText">
                    IEEE Sudent Branch, Government Engineering College, Thrissur.</h4> */}
                <div className="ReadmoreAboutDiv">
                    <button className="moreGalleryBtn" onClick={this.handleOpenModal}>About Us</button>
                </div>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                    <button className="modalCloseBtn" onClick={this.handleCloseModal}>
                        <i style={{ fontSize: "24px" }} className="fa">&#xf060;</i>
                    </button>
                    <div className="container" style={{ textAlign: "left" }}>
                        <h6 style={{ fontFamily: `'Montserrat', sans-serif`, fontWeight: "500", lineHeight: "1.5" }}>{ReactHtmlParser(data.about)}</h6>
                    </div>
                </ReactModal>
            </div>
        );
    }
}

export default About;