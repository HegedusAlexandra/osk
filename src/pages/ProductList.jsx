import React from 'react'
import ProductListContainer from '../components/ProductListContainer'
import Menu from '../components/Menu'
import Footer from './Footer'
import MobileMenu from '../components/MobileMenu'

export default function ProductList() {
  return (
    <div className="absolute z-2 w-[100%] h-[500vh] bg-transparent">
         {window.innerWidth > 780 ? <Menu screen={"list"} /> : <MobileMenu/>}
        <ProductListContainer/>
        <Footer/>
    </div>
  )
}
