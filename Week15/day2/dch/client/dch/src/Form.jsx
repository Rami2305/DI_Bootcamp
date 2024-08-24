import React, { Component } from 'react'


class Form extends React.Component {
  constructor() {
    super();
  }

  handleSubmit = async (e)=> {
    e.preventDefault();
    const messageInput = document.getElementById('search')
    const message = messageInput.value;
    // console.log(message.value);
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },   
        body: JSON.stringify({ message })
    }
    const url = 'http://localhost:3001/api/world'
    try {
    const resJson = await fetch(url, options);
    const res = await resJson.json();
    this.props.setMessage(res.message)
    messageInput.value = ''
    console.log('res:', res)
    } catch (err) {
        console.error(err)
    }
  };


  render() {
    return <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Type Here' id='search' />
        <input type='submit' value='Submit' />
    </form>
  }
}

export default Form