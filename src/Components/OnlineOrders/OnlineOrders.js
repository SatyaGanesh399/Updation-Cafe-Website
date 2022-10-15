import React from "react";
import orders from "./orders";
import "./OnlineOrders.css";
import AllProducts from "./AllProducts";

function OnlineOrders() {

  const allOrders = orders.map((item) => (
    <AllProducts
    id = {item.id}
    img = {item.img}
    name = {item.name}
    price = {item.price}
    discountedPrice = {item.discountedPrice}
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
