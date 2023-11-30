import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Loginpage from './Loginpage'
import Logoutpage from './Logoutpage'
import Setreminder from './Setreminder'
import Modifyreminder from './Modifyreminder'
import Disablereminder from './Disablereminder'
import Deletereminder from './Deletereminder'
import Enablereminder from './Enablereminder'
import Viewyourreminder from './Viewyourreminder'

function App() {
  return (
    <div>
        <Routes>
        <Route path='/homepage' element={<Homepage/>}/>
        <Route path='/' element={<Loginpage/>}/>
        <Route path='/logoutpage' element={<Logoutpage/>}/>
        <Route path='/setreminder' element={<Setreminder/>}/>
        <Route path='/modifyreminder' element={<Modifyreminder/>}/>
        <Route path='/disablereminder' element={<Disablereminder/>}/>
        <Route path='/deletereminder' element={<Deletereminder/>}/>
        <Route path='/enablereminder' element={<Enablereminder/>}/>
        <Route path='/viewyourreminder' element={<Viewyourreminder/>}/>
      </Routes>
    </div>
  )
}

export default App
