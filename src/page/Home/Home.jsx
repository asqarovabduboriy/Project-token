import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Product from '../../components/product/Product'
import { Route, Routes } from 'react-router-dom'

const Home = () => {
  return (
   <>
     <Navbar/>
     <Product/>
   </>
  )
}

export default Home