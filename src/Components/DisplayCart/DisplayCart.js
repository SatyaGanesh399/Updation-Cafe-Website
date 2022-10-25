import React from 'react'
import './DisplayCartComp.css'
import CounterContext from '../../CreateContext'


function DisplayCart() {
  
  const {cart}  = React.useContext(CounterContext);
  let totalPrice = 0;
  cart.map(item => totalPrice = totalPrice + item.price)
  let allOrders = cart.map(item =>
    <div className='item-classification'>
      <p>{item.name}</p>
      <p>${item.price}</p>
    </div>);

  return (
    <div className='display-cart'>
        <h4>Cart Items</h4>
        <div className='item-classification'>

          <p>Product</p>
          <p>Price</p>
        </div>
        <div className='wrapper-class'>
          {allOrders}
        </div>
          <h5 className='total-price'>Total Price : ${totalPrice}</h5>
        <button type="" className='checkout-button'>Check Out</button>
    </div>
  )
}

export default DisplayCart