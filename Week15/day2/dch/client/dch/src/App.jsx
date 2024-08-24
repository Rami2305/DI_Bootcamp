import React, { Component } from 'react'
import Form from './Form'
import './App.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {message: null}
  } 
  
  async componentDidMount() {
      const url = 'http://localhost:3001/api/hello'
      try {
        const resText = await fetch(url)
        const res = await resText.text();   
        this.setState({ message: res})
    } catch(err) {
      console.log(err);
    }
  }

  render () {
    return (
      <>
        <Form setMessage={(message) => this.setState({ message})}/>
        <div>{this.state.message}</div>
      </>
    )
  }
}
export default App
