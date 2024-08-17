// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


import React from 'react';
import User from './User'
import users from './users.json'
console.log(users)

function App() {

  return (
    <>
      <div>
        <h2>Robots</h2>
        {users.map((item) => {
          return <User key={item.id} info={item}/>
        })}
      </div>
    </>
  )
}

export default App
