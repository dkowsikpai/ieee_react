import React from 'react';
import './static/main.css';

import Header from './components/Header';
import About from './components/About';
import Counter from './components/Counter';
import Execom from './components/Execom';
import Awards from './components/Awards';
import Activity from './components/Activity';
import Gallery from './components/Gallery';



class App extends React.Component{
    render() {
        return (
            <div className="row">
                <Header/>
                <About/>
                <Counter/>
                <Awards/>
                <Activity/>
                <Gallery/>
                <Execom/>
            </div>
        );
    }


}

export default App;

