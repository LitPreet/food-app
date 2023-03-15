import React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { useParams } from "react-router-dom";
import {
  IMG_CDN_URL,
  swiggy_api_URL,
  swiggy_menu_api_URL,
  ITEM_IMG_CDN_URL,
} from "../../constant";
import "../css/restaurant.css";
import respo from "../assets/img/res-img.webp";
import { AiFillHome } from "react-icons/ai";
import { FaCity } from "react-icons/fa";
import "../css/item.css";
import { MenuShimmer } from "./ShimmerCard";

// import Shimmer from './shimmer';
// import { useState } from 'react';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(swiggy_menu_api_URL + resId);
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }
  return !restaurant ? <MenuShimmer/> : (
    <div className="Menu">
      <div className="first-div">
        <div className="res-div">
          <img
            className="res-img"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          />

          <div className="res-desc">
            <p className="res-name">{restaurant?.name}</p>

            <p className="res-area">
              <AiFillHome className="area" />
              Area—{restaurant?.area}
            </p>

            <p className="res-city">
              <FaCity className="city" />
              City—{restaurant?.city}
            </p>

            <p className="avg-rat">
              <span className="st-img">
                <img
                  className="star2"
                  src="https://cdn-icons-png.flaticon.com/512/3334/3334338.png"
                />
                {restaurant?.avgRating}
              </span>
              <span className="pr-c"> Price: {restaurant?.costForTwoMsg}</span>
            </p>
          </div>
        </div>
      </div>

      <h1 className="menu-tit">View our Menu</h1>
  

      <ul className="items-container">
        {restaurant?.menu?.items &&
          Object.values(restaurant.menu.items).map((item) => {
            return (
              <li key={item?.id} className="menu-item">
                {item?.cloudinaryImageId && (
                  <img
                    className="menu-item-img"
                    src={ITEM_IMG_CDN_URL + item?.cloudinaryImageId}
                    alt={item?.name}
                  />
                )}
                {/* <img src={ITEM_IMG_CDN_URL + item?.cloudinaryImageId}/> */}
                <div className="menu-item-dets">
                  <p className="menu-item-heading">{item?.name}</p>
                  <p className="item-desc">{item?.description}</p>
                  <p className="g-price">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                </div>
                <button className="add-button">Add to Cart</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
