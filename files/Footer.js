import React from 'react';
import './Footer.css';
import MapContainer from './MapContainer';


export class Footer extends React.Component {
    render() {
        return (
            <div class="footer-container">
                <div class = "footermain">
                    <div class = "footerleft">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Convergence" />
                        <h4 style = {{color:'black', fontFamily: 'Convergence'}}>Follow us on </h4>
                        <ul className="social">
                            <li className = "socialitems"><a href="https://www.facebook.com/ieeesbgectcr/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li className = "socialitems"><a href="https://www.facebook.com/ieeesbgectcr/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li className = "socialitems"><a href="https://www.facebook.com/ieeesbgectcr/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                    <div class = "footercenter">
                        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Atomic+Age" />
                        <ul className = "nav">
                            <li className = "navitems"><a href="">Home</a></li>
                            <li className = "navitems"><a href="">About us</a></li>
                            <li className = "navitems"><a href="">Gallery</a></li>
                            <li className = "navitems"><a href="">Team</a></li>
                        </ul>
                    </div>
                    <div class = "footerright">
                        <h3 style = {{color: 'black', fontFamily: 'Convergence'}}> Find us at</h3>
                        <MapContainer className = "map" />
                    </div>
                </div>
                <div class = "subfooter">
                &#169; 2020 name
                </div>
            </div>
        );
        }
}

export default Footer;

