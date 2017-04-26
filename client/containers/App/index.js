import React, { Component } from 'react';

import './style.css';

class App extends Component {

    render() {
        let myprops = [1,2];
        let copyprops = {...myprops};

        return (
            <div className="viewport">

            </div>
        );
    }
}

export default App;
