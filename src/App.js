import './App.css';
import React from 'react';
import HomePage from './homepage.js';
import NavBar from './navbar.js';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <HomePage/>
            </React.Fragment>
        );
    }
}

export default App;
