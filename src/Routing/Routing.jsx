import React from 'react'
import HomeOne from '../Pages/HomeOne'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderOne from '../Layout/Header/HeaderOne'
import FooterOne from '../Layout/Footer/FooterOne'

const Routing = () => {
  return (
    <BrowserRouter>
    <HeaderOne/>
    <Routes>
        <Route path="/" element={<HomeOne/>}></Route>
    </Routes>
    {/* <FooterOne/> */}
    </BrowserRouter>
  )
}

export default Routing