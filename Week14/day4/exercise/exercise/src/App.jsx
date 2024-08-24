
import React, { Component } from 'react';
// import './App.css';
import ErrorBoundary from './component/ErrorBoundary.jsx'
import Color from './component/Color.jsx'


class BuggyCounter extends Component {
    constructor(props) {
      super(props);
      this.state = {counter: 0}
    }
  
    handleClick = () => {
      this.setState((prevState) => {
        if (prevState.counter === 4) {
          throw new Error('I crashed!');
        }
        return { counter: prevState.counter + 1 };
      });
    };

  // HERE I GOT STUCKED BECAUSE I USED setState and when
  // the fx ran, it hadnt finished updating  yet. So it doesnt charge everything
  
  //MY handleClick FX
  // handleClick = () => {
    
  //   if (this.state.counter === 4) {
  //     throw new Error('I crashed!');
  //   }
  //   this.setState({ counter: this.state.counter + 1 });
  
  // }
  //Fx that execute the add of the button. 
  //There is a useState that refresh the component with the new value of counter.
  //Explanation from the first part of exercise 
  
  render(){
  return (
    <>
      <div><h2>Counter</h2>
      <button onClick={this.handleClick}>Click to Add: {this.state.counter}</button>
      </div>
    </>
  )}
}

class App extends Component{
  render(){  
    return (
      <div className="App">
        <h1>Count</h1>
        {/* <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
          <BuggyCounter /> */}
          <Color />
      </div>
    );}
}

export default App;