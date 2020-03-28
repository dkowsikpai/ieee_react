import React, { Component } from 'react'

class LeftCard extends Component {
    render() {
        return (
        <div>
            <article>
                 <div className="inner">
                    <span className="date">
                    <span className="day">30<sup>th</sup></span>
                    <span className="month">Jan</span>
                    <span className="year">2014</span>
                    </span>
                     <h2>{this.props.title}</h2>
                     <p>{this.props.content}<br/><br/><br/>
                <div className="imgLink">image</div></p> 
                {/* PLEASE NOTE THAT imgLink DIV IS SUPPOSED TO ADD CONNECT TO CORRESPONDING PHOTO IN GALLERY IF PHOTO IS AVAILABLE */}
            </div>
            </article>
        </div>
        )
    }
}

export default LeftCard
