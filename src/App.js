import React from 'react';
import './static/main.css';


import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Counter from './components/Counter';
import Execom from './components/Execom';
import Awards from './components/Awards';
import Activity from './components/Activity';
import Gallery from './components/Gallery';
import ContactUs from './components/Contactus';
import Developers from './components/Developer';
// import Footer from './components/Footer';


class App extends React.Component {
    render() {
        return (
            <div id="homeDir" className="row">
                <Nav home="true" />
                <Header />
                <About />
                <Counter />
                <Awards />
                <Activity />
                <Gallery />
                <Execom />
                <ContactUs />
                <Developers />
                {/* <Footer /> */}
            </div>
        );
    }


}

export default App;

