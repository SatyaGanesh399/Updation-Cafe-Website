import React from "react";
import orders from "./BevarageOrders";
import './Bevarages'
import ProductsBevarages from "./ProductsBevarages";

function Bevarages() {

  const allOrders = orders.map((item) => (
    <ProductsBevarages
    id = {item.id}
    img = {item.img}
    name = {item.name}
    price = {item.price}
    discountedPrice = {item.discountedPrice}
     />
  ));
  return (
    <div>
      <div className="orders-section">
        <div className="order-title">Bevarages</div>
        <div className="all-orders">{allOrders}</div>
      </div>
    </div>
  );
}

export default Bevarages;
