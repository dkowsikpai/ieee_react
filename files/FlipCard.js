import React from 'react';
import './FlipCard.css';
//import cartoon from './cartoon.jpg'

function FlipCard(props) {

    var image = ""
    var name = ""
    var position = ""
    if(props.image) {
        image = props.image
    }
    else {
        image = "./cartoon.jpg"
    }

    if(props.name) {
        name = props.name
    }
    else {
        name = "name"
    }

    if(props.position) {
        position = props.position
    }
    else {
        position = "position"
    }
    return (
        <div className="flip-card">
        <div className="flip-card-inner">
            <div class="flip-card-front">
                <div className = "top" > 
                    <img src="./cardtop.jpg" alt = "dumb" class = "background" />   
                </div>
                <div className = "center">
                    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Carter+One" />
                    <img className = "image" src = {image} alt = "dumb" />
                    <h2 className = "name">{name}</h2>
                    <h3 className = "position">{position}</h3> 
                </div>
                <div className = "view"> View more </div>
            </div>
            <div className="flip-card-back">
                email
            </div>
        </div>
      </div> 
    )
}

export default FlipCard