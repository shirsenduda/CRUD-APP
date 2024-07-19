/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import Navbar from './Componets/Navbar/Navbar'
import Home from './pages/Home/Home'
const App = () => {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-slate-400 flex-col">
        <Navbar/>
        <Home/>
      </div>
    </>
  )
}

export default App
