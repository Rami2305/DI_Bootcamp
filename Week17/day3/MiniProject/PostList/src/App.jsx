import { useState } from 'react'
import './App.css'
import PostList from './features/PostList'
import UserList from './users/Users'


function App() {
  

  return (
    <>
      <h2>Post List with Reactions and Author Filter</h2>
      <UserList />
      <PostList />
    </>
  )
}

export default App
