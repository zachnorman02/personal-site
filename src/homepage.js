import React from 'react';

class HomePage extends React.Component {
    render() {
        return (
            <div id={'homepage-container'}>
                <h1>Zach Norman</h1>
                <h3>Software developer and designer</h3>
                <p>I am a third-year Computer Science and Math major at Northeastern University, expected to graduate
                    summer 2023. </p>
                <h2>About</h2>
                <h3>Experience</h3>
                <strong>Baltimore Orioles- Software Development Co-op</strong>
                <br/>
                <em>January - September 2022</em>
                <hr/>
                <h2>Selected Software Projects</h2>
                <button>Image Processor</button>
                <button>Business Report PDF Generator</button>
                <h2>Selected Design Projects</h2>
                <button>Takeout Ordering App</button>
            </div>
        )
    }
}

export default HomePage;