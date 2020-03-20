import React from 'react';
import './App.css';
import Footer from './Footer.js'
import Panel from './Panel.js'


export class App extends React.Component { 
      
    render() {
    return (
        <div className="App">
            <div className="App-header">
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Pacifico" />
                <h1 className = "execom">The Team</h1>
                <Panel />
                <Footer />
                
            </div>
        </div>
    );
    }
}

export default App;
  
