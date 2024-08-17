import React, { Component } from "react";


//etapas de vida de react mounting, upgrade, unmounting
class Counter extends React.Component {
    constructor() {
        console.log('constructor')
        super()
        // this.counter = 0;
        this.state = {
            counter: 0
        }
    }

    addOne = () =>{
        // this.counter += 1;
        // console.log(this.counter)
        this.setState({counter: this.state.counter +1})
    }

    minusOne = () =>{
        // this.counter -= 1;
        // console.log(this.counter)
        this.setState({counter: this.state.counter -1})
    }
    render() {
        console.log('render')
        return (
            <>
            <button onClick={this.addOne}> + </button>
            Counter: {this.state.counter}
            <button onClick={this.minusOne}> - </button>
            </>
        )
    }
}

export default Counter

