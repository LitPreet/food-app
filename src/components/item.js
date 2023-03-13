import React from 'react'
import '../css/item.css'
const Item = () => {
  return (

    <li className="menu-item">
      <img src="https://www.codehim.com/demo/javascript-shopping-cart-with-total-price/img/plate__french-fries.webp"/>
      <div className="menu-item-dets">
        <p className="menu-item-heading">French Fries with Ketchup</p>
        <p className="g-price">$2.23</p>
      </div>
      <button
        className="add-button"
    >Add to Cart</button>
    </li>
  )
}

export default Item