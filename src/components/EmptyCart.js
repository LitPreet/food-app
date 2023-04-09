import React from 'react'
import ReactDOM  from 'react-dom/client';
import Cart from '.././assets/img/cart2.png'
import '../css/emptyCart.css'
import { Link } from 'react-router-dom'
const EmptyCart = () => {
  return (
   <div className='empty-section'>
      <img src={Cart} className="cart-img2"/>
     
      <p className='cart-h'>Your Cart is Empty!</p>
      {/* <p className='cart-p'>Looks like you have not added anything to you cart.</p> */}
      <p className='cart-p'>Go ahead & explore top categories</p>
     <Link to="/"><button className='cart-btn' >Continue Shopping</button> </Link>
   
   </div>
  )
}

export default EmptyCart