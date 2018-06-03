import React, { Component } from 'react';
import '../App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="App">
                <h1>State and Lifecycle</h1>
                <h2><i>It is {this.state.date.toLocaleTimeString()}.......</i></h2>
            </div>
        );
    }
}

export default Clock