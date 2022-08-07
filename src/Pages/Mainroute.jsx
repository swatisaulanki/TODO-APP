import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EditPage from './EditPage'
import HomePage from './HomePage'
import Singletodo from './Singletodo'

const Mainroute = () => {
  return ( 
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/todo/:id" element={<Singletodo/>} />
        <Route path="/todo/:id/edit" element={<EditPage/>} />
      </Routes>
    </div>
  )
}

export default Mainroute
