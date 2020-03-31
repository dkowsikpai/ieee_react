import React from "react";

import g1 from '../static/images/gallery/g1.jpg';
import g2 from '../static/images/gallery/g2.jpg';
import g3 from '../static/images/gallery/g3.jpg';
import g4 from '../static/images/gallery/g4.jpg';

const imgStyle = { textAlign: "center", margin: "auto" };

class Gallery extends React.Component {
    
    constructor(props) {
        super(props);
        this.galleryClick = this.galleryClick.bind(this);
    }
    
    galleryClick() {
        window.location.href = "https://ieeegallery.web.app/";
    }

    render() {
        return (
            <div id="gallery" className="container-fluid">
                <hr className="style-one" />
                <div style={{ textAlign: "center" }} className="sectionHeading">
                    <h1 className="person" style={{ fontFamily: `'Montserrat', sans-serif`, letterSpacing: "5px", fontWeight: "500" }}>Gallery</h1>
                </div>
                <div className="row">
                    <div className=" galleryImage" style={imgStyle} ><img src={g1} alt="" width="300" height="200" /></div>
                    <div className=" galleryImage" style={imgStyle} ><img src={g2} alt="" width="300" height="200" /></div>
                    <div className=" galleryImage" style={imgStyle} ><img src={g3} alt="" width="300" height="200" /></div>
                    <div className=" galleryImage" style={imgStyle} ><img src={g4} alt="" width="300" height="200" /></div>
                </div>
                <div style={{ textAlign: "center", visibility: "visible" }}>
                    <button className="moreGalleryBtn" onClick = {this.galleryClick}>See More</button>
                </div>

            </div>
        );
    }
}

export default Gallery;