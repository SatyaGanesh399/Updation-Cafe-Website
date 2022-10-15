import React from 'react'
import products from './ProductsList'
import ProductsList from './ProductsList'
import './Products.css'
function OurProducts() {

    const allproducts = products.map(item => 
        <div className='product-card'>
            <img src = {item.image} alt = "" className='product-image'/>
            <h4 className='product-title'>{item.name}</h4>
        </div>
        )

  return (
    <div className='products'>
        <div className='products-heading'>
            <h3>OUR PRODUCTS</h3>
        </div>
        <div className='products-items'>
        {allproducts}
        </div>
    </div>
  )
}

export default OurProducts