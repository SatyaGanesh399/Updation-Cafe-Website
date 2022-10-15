import React from 'react'
import CounterContext from "../../CreateContext";
import './Bevarages.css'
function ProductsBevarages(props) {

    const {shoppingItems, setShoppingItems} = React.useContext(CounterContext);

    const [isAdded, setIsAdded] = React.useState(false)
    function handleClick(){
        setIsAdded(!isAdded)
        if(!isAdded){
          setShoppingItems(shoppingItems+1)
        }else{
          setShoppingItems(shoppingItems-1)
        }
    }
  return (
    <div key={props.id} className="order-card">
      <img src={props.img} alt="" className="order-image" />
      <h4 className="order-name">{props.name}</h4>
      <div className="prices">
        <p className="props-price">
          Price :<strike>{props.price}</strike>
        </p>
        <p className="discounted-props-price">{props.discountedPrice}</p>
      </div>
      <div className="buttons">
        <button type="button" className="buy-button">
          Buy
        </button>
        <button type="button" className={isAdded ? "added-to-cart":"add-button"} onClick={handleClick}>
          {isAdded ? "Added to cart":"Add to cart"}
        </button>
      </div>
    </div>
  )
}

export default ProductsBevarages