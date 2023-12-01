import React, {useState} from 'react'
import { Header, Footer, } from './Components'
import './App.css'
import Products from './screens/Products/Products'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './screens/ProductDetail/ProductDetail'
import Add from './screens/Add/Add'
import Registration from './screens/Registration/Registration'
import LogIn from './screens/LogIn/LogIn'
import Delete from './screens/Delete/Delete'
import UpdateP from './screens/UpdateP/UpdateP'


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/product/:pid' element={<ProductDetail/>}/>
        <Route path='/Add' element={<Add />}/>
        <Route path='/Registration' element={<Registration />}/>
        <Route path='/LogIn' element={<LogIn />}/>
        <Route path='/Delete' element={<Delete />}/>
        <Route path='/UpdateP/:pid' element={<UpdateP />} />


      </Routes>
      <Footer/>
    </>
  )
}

export default App
