import React from "react";
import orders from "./orders";
import "./OnlineOrders.css";
import AllProducts from "./AllProducts";
import CounterContext from "../../CreateContext";

function OnlineOrders() {

  const {cart, setcart} = React.useContext(CounterContext);
  function getOrderDetails(data){

    let obj = orders.filter(item => item.id === data)
    setcart([...cart, obj[0]]);
  }


  const allOrders = orders.map((item) => (
    <AllProducts
    id = {item.id}
    img = {item.img}
    name = {item.name}
    price = {item.price}
    discountedPrice = {item.discountedPrice}
    getOrderDetails = {getOrderDetails}
     />
  ));
  return (
    <div className="orders-section">
      <div className="order-title">Coffee</div>
      <div className="all-orders">{allOrders}</div>
    </div>
  );
}

export default OnlineOrders;
