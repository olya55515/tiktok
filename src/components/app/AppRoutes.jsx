import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../feed/Feed'
import SearchFeed from '../search/SearchFeed'

 const AppRoutes = () => (
    <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/search' element={<SearchFeed />} />
    </Routes>
  )



export default AppRoutes