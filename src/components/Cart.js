import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementItem,
  decrementItem,
  removeItem,
  clearCart,
} from "./utils/CartSlice";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillInfoCircle } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx'
import "../css/cart.css";
import swiggy from "../assets/img/Swiggy-Logo-PNG.png";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [emptyCart, setEmptyCart] = useState(cartItems.length === 0);
  const dispatch = useDispatch();

  const handleDeleteItem = (item) => {
    dispatch(removeItem(item));
    if (cartItems.length === 1) {
      // check cartItems length after deleting the item
      setEmptyCart(true);
    }
  };
  const handleClearCart = () => {
    dispatch(clearCart());
    setEmptyCart(true);
  };

   const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // show the toast message for 5 seconds when showToast is true
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // Update the height of the div whenever cartItems change

 

  useEffect(() => {
    const sectionEl = document.querySelector(".section");
    if (cartItems && cartItems.length > 0 && sectionEl !== null) {
      const width = window.innerWidth;
      let divHeight;
      if (width >= 962) {
        divHeight = `${cartItems.length * 80 + 900}px`;
      } else if (width >= 768) {
        divHeight = `${cartItems.length * 100 + 900}px`;
      } else {
        divHeight = `${cartItems.length * 100 + 400}px`;
      }
      sectionEl.style.height = divHeight;
    }
      
    
  }, [cartItems]);

  function fn(text) {
    return text.slice(0, 15) + (text.length > 15 ? "..." : "");
  }

  return emptyCart ? (
    <EmptyCart />
  ) : (
    <>
    {/* toast animation  */}
    {showToast && (
        <div className="toast active">
          <div className="toast-content">
            <AiFillInfoCircle  style={{color:"#2770ff",fontSize:"30px"}} />

            <div className="messagen">
              <span className="texty texty-1">Info</span>
              <span className="texty texty-2">
                 Please login in for checkout
              </span>
            </div>
          <button className="cross" onClick={() => setShowToast(false)}>
      <RxCross1  />
    </button>
          </div>

          <div className="progress active"></div>
        </div>
      )}
      {/* main start  */}
      <div className="section" style={{ overflowY: "scroll"}}>
        <div className="cart-container">
          <p className="cart-head">Your cart</p>
          <div className="clear-cart-btn">
            <p className="slogan">Delicious snacks, perfect price</p>

            <button
              disabled={cartItems.length > 0 ? false : true}
              onClick={() => handleClearCart()}
            >
              Clear Cart{" "}
            </button>
          </div>
          {/* map start  */}
          <hr className="my" />
          {cartItems.map((item) => {
            return (
              <div key={item?.id} className="item-div">
                <div className="item-wrap-img-det">
                  <img className="item-img" src={IMG_CDN_URL + item?.imageId} />
                  <div className="item-price-det">
                    <p className="item-name">{fn(item?.name)}</p>
                    <p className="item-price">
                      Rs. {(parseInt(item?.price) / 100).toFixed(2)}{" "}
                    </p>
                    <p className="item-total-price">
                      Total price: ₹{" "}
                      {(item.itemCount * (parseInt(item?.price) / 100)).toFixed(
                        2
                      )}
                    </p>
                  </div>
                </div>
                <div className="btns-div">
                  <div className="min-plu-butt">
                    <button
                      className="minus-button"
                      disabled={item.itemCount === 1 ? true : false}
                      onClick={() => dispatch(decrementItem(item))}
                    >
                      -
                    </button>
                    <span className="item-count">{item.itemCount}</span>
                    <button
                      className="plus-button"
                      onClick={() => dispatch(incrementItem(item))}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="trash"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* first div end  */}

        {cartItems.length > 0 && (
          <div className="checkout-div">
            <p className="bill-p">Total Bill</p>

            <div className="voucher-n">
              <div className="main-n">
                <div className="co-img">
                  <img src={swiggy} alt="" />
                </div>
                <div className="vertical"></div>
                <div className="content">
                  <h2>Swiggy's</h2>
                  <h1>
                    10% <span>Coupon</span>
                  </h1>
                  <p>Valid till 30 April 2024</p>
                </div>
              </div>
              <div className="copy-button">
                <input id="copyvalue" type="text" readonly value="GOFREE" />
                <button className="copybtn">APPLIED</button>
              </div>
            </div>

            <p className="total-price-tag">
              Total price: ₹{" "}
              {cartItems.length &&
                cartItems
                  .map((item) => (item.itemCount * parseInt(item?.price)) / 100)
                  .reduce((acc, curr) => acc + curr, 0)
                  .toFixed(2)}
            </p>

            <button className="check-btn" id="btun" onClick={() => setShowToast(true)}>Checkout</button>
            <button className="shop-btns">Continue Shopping</button>
          </div>
        )}
      </div>
    </>
  );
};
export default Cart;
