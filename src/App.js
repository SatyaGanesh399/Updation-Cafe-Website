import React from 'react';
import { Badge } from 'react-bootstrap';
import './App.css';
import Navbar from './Components/Home/Navbar';
import Carousel from './Components/Home/Carousel';
import OurProducts from './Components/OurProducts/OurProducts';
import OnlineOrders from './Components/OnlineOrders/OnlineOrders';
import Bevarages from './Components/Bevarages/Bevarages';
import Footer from './Components/Footer/Footer';
// import { Provider } from 'react';
import CounterContext from './CreateContext';
// import CommentSection from './Components/CommentSection/CommentSection';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import DisplayCart from './Components/DisplayCart/DisplayCart';

function App() {

  const [shoppingItems, setShoppingItems] = React.useState(0);
  const [cartItems, setCartItems] = React.useState(false);
  const [cart, setcart] = React.useState([]);
  // console.log(cart);
  return (
    <div className="App">
      <CounterContext.Provider value = {{shoppingItems, setShoppingItems, cart, setcart}}>
      <Navbar />
      <Carousel />
      <div onClick={() => setCartItems(!cartItems)}>
        <OverlayTrigger key='left' placement='left' overlay={
            <Tooltip id={`tooltip-left`} className = "cart">Cart</Tooltip>}>
              
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" className = 'shopping-cart'>
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg></OverlayTrigger>
      <Badge bg="danger" className='item-counter' >{shoppingItems}</Badge>{' '}
      
      </div>
      
      {cartItems && <DisplayCart />}
      <OurProducts />
     <h3 className='online-orders'>Online Orders</h3> 
     
      <OnlineOrders />
      <Bevarages />
      </CounterContext.Provider>
      {/* <CommentSection /> */}
      <Footer />
    </div>
  );
}

export default App;
