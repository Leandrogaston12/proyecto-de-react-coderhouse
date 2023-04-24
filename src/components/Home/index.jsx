import React, { useContext } from 'react'
import ProductList from '../ProductList'
import { CartContext } from '../../Context/CartContext'

const Home = () => {
  const prueba = useContext(CartContext)
  console.log(prueba)
  return (
    <ProductList />
  )
}

export default Home