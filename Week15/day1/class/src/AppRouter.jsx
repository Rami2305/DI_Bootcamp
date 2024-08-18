
import React from 'react';

import Phone from './component/Phone'
import Home from './component/Home'
import Shop from './component/Shop'
import Product from './component/Product'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
import Nav from './component/Nav'

function App() {

  return (
    <>
      <Nav></Nav>       
      <Routes>
        <Route path='/' element={<Home title='Dashboard'/>}/>
        <Route path='/home' element={<Home title='Dashboard'/>}/>
        <Route path='/phone' element={<Phone />}/>
        <Route 
          path='/shop' 
          element={
          <>
            <Shop/></>
        }
        />
        <Route path='/product/:id' element ={<Product/>}/>
      </Routes>
    </>
  
  )
}

export default App


// primero creamos la ruta para la firstpage
//segundo definimos las rutas para todas aquellas secciones que pueda llegar a tener la pagina
//a todos ls tenemos que dar el path para que sepa donde ir a buscar y todos los datos que querramos que figure
//el link definido en el header es para poder en cada page ir a cada seccion de la pagina