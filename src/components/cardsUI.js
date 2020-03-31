import React from 'react'
import '../static/cardUI-style.css'
import icon from '../static/images/execom/gmail.png'
function CARDS(props) {
    return (
        <div className='card text-center shadow'>
            <div className="overflow">
                <img src={props.image} alt="..." className='card-img-top' />
            </div>
            <div className="card-body text-dark">
                <h4 className='card-title'>{props.name}</h4>
                <p className="card-text text-secondary">{props.status}</p>
                <img src={icon} alt="" />
                <p style={{ textAlign: "center" }}>{props.gmail}</p>
            </div>
        </div>
    )
}

export default CARDS
