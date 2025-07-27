import React from 'react';
import Login from './components/Login.js'
import SignUp from './components/SignUp.js';
import Home from './components/Home.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path='register' element={<SignUp/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
};
export default App

