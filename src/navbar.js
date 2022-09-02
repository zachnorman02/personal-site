import React, { Component } from 'react';
import './App.css';

class NavBar extends React.Component {
    render() {
        return (
            <div id={'navbar'}>
                <a href={'https://www.linkedin.com/in/zachnorman02/'}>LinkedIn</a>
                <a href={'https://github.com/zachnorman02'}>GitHub</a>
                <a>Resume</a>
                <a>Contact</a>
            </div>
        )
    }
}

export default NavBar;