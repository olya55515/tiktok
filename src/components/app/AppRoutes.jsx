import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../feed/Feed'
import Header from '../header/Header'
import Video from '../videos/Video'

 const AppRoutes = () => (
    <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/' element={<Header />} />
    </Routes>
  )



export default AppRoutes