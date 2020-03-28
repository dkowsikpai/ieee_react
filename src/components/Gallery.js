import React from "react";

import ReactModal from 'react-modal';

import g1 from '../static/images/gallery/g1.jpg';
import g2 from '../static/images/gallery/g2.jpg';
import g3 from '../static/images/gallery/g3.jpg';
import g4 from '../static/images/gallery/g4.jpg';

const imgStyle = {textAlign: "center", margin: "auto"};

class Gallery extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            img: ""
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal (event) {
        console.log(event.target['src']);
        this.setState({ showModal: true, img: event.target['src']});
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }



    render() {
        return(
          <div className="container-fluid">
              <div className="row">
                <div className=" galleryImage"  style={imgStyle} ><img src={g1} alt="" width="300" height="200" /></div>
                <div className=" galleryImage"  style={imgStyle} ><img src={g2} alt="" width="300" height="200" /></div>
                <div className=" galleryImage"  style={imgStyle} ><img src={g3} alt="" width="300" height="200" /></div>
                <div className=" galleryImage"  style={imgStyle} ><img src={g4} alt="" width="300" height="200" /></div>
              </div>

              <ReactModal
                  isOpen={this.state.showModal}
                  contentLabel="Minimal Modal Example"
              >
                  <button onClick={this.handleCloseModal}  style={{position: "absolute", zIndex: "2"}} className="modalCloseBtn">X</button>
                  <img src={this.state.img} alt="" width="100%" height="100%"/>
              </ReactModal>
          </div>
        );
    }
}

export default Gallery;