import { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import ErrorBoundary from './component/ErrorBoundary';
import PostList from './component/PostList';
import Example1 from './component/Example1'
import Example2 from './component/Example2'
import Example3 from './component/Example3'
// function App() {
//   const HomeScreen = () => <h1>Home</h1>
//   const ProfileScreen = () => <h1>Profile </h1>
//   const ShopScreen = () => {
//     throw new Error('its an error Ramiro')
//   }
    
//   return (
//     <>
//       <div className="container">
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <ul className="navbar-nav mr-auto">
//                 <li className="nav-item">
//                     <NavLink className="nav-link" to="/">Home</NavLink>
//                 </li>
//                 <li className="nav-item">
//                     <NavLink className="nav-link" to="/profile">Profile</NavLink>
//                 </li>
//                 <li className="nav-item">
//                     <NavLink className="nav-link" to="/shop">Shop</NavLink>
//                 </li>
//             </ul>
//         </nav>
//         <ErrorBoundary>
//           <Routes>
//             <Route path='/' element={<HomeScreen />}/>
//             <Route path='/profile' element={<ProfileScreen />}/>
//             <Route path='/shop' element={<ShopScreen />} />
//           </Routes>
//         </ErrorBoundary>
//       </div>

//     </>
//   )
// }
function App() {

  const handleClick = async () => {
    const url = 'https://webhook.site/0e541b59-6133-435d-af1e-57f60320bf38';
    try {
      const body = {
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
      }
      const options = {
        method: 'POST',
        headers: {
          'Content-type': "application/json"
        },
        body: JSON.stringify(body)
      }
      const res = await fetch(url, options);
      const resJson = await res.json();
      console.log('resJson:', resJson)
    } catch (err) {
      console.error(err)
    }
  }
  
  return (
  //     <div className="App">
  //         <PostList />
  //     </div>
      <div>
        {/* <Example1 />
        <Example2 />
        <Example3 /> */}
        {/* <button onClick={handleClick}> Post Data</button> */}
      </div>
  )
}
export default App


