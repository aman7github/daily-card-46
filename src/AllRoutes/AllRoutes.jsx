import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Host from "../Pages/Host"
import Login from "../Pages/Login"
import Signup from '../Pages/Signup'
import Booking from '../Pages/Booking'

const AllRoutes = () => {
  return (
    <Routes>
     <Route path="/"  element={<Home />} />
     <Route path="/login"  element={<Login  />} />
     <Route path="/signup"  element={<Signup  />} />
     <Route path="/host"  element={<Host  />} />
     <Route path="/booking" element={<Booking />} />

    </Routes>
  )
}

export default AllRoutes