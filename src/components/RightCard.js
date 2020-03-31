import React, { Component } from 'react'

class LeftCard extends Component {
    render() {
        return (
            <div>
                <article>
                    <div className="inner right">
                        <span className="date">
                            <span className="day">{this.props.day}<sup>{this.props.sp}</sup></span>
                            <span className="month">{this.props.month}</span>
                            <span className="year">{this.props.year}</span>
                        </span>
                        <h2>{this.props.title}</h2>

                        <p>{this.props.content}<br /><br /><br />
                            {/* <div className="imgLink">image</div> */}
                        </p>
                        {/* PLEASE NOTE THAT imgLink DIV IS SUPPOSED TO ADD CONNECT TO CORRESPONDING PHOTO IN GALLERY IF PHOTO IS AVAILABLE */}
                    </div>
                </article>
            </div>
        )
    }
}

export default LeftCard
