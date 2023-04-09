import React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { useParams } from "react-router-dom";
import {
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  swiggy_menu_api_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../../constant";
import "../css/restaurant.css";
import respo from "../assets/img/res-img.webp";
import { AiFillHome } from "react-icons/ai";
import { FaCity } from "react-icons/fa";
import "../css/item.css";
import { MenuShimmer } from "./ShimmerCard";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/CartSlice";
import IMG1 from "../assets/img/random1.jpeg";
import IMG2 from "../assets/img/random2.webp";
import IMG3 from "../assets/img/random3.jpeg";
import IMG4 from "../assets/img/random4.jpeg";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  function fn(text, count) {
    return text.slice(0, count) + (text.length > count ? "..." : "");
  }
 
  function getRandomImage() {
    const images = [IMG1, IMG2, IMG3, IMG4];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    try {
      const response = await fetch(swiggy_menu_api_URL + resId);
      const json = await response.json();

      // set restaurant data
      const restaurantData =
        json?.data?.cards
          ?.map((x) => x?.card)
          ?.find((x) => x && x?.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
      setRestaurant(restaurantData);

      // set menu items data
      const menuItemsData =
        json?.data?.cards
          ?.find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];
      setMenuItems(menuItemsData);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  }

  return  !restaurant ? (<MenuShimmer />) 
   : (
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
              <span className="pr-c">
                {" "}
                Price: {restaurant?.costForTwoMessage}
              </span>
            </p>
          </div>
        </div>
      </div>

      <h1 className="menu-tit">View our Menu</h1>

      <ul className="items-container">
        {menuItems.map((item) => {
          return (
            <li key={item?.imageId} className="menu-item">
              {item?.imageId && (
                <img
                  className="menu-item-img"
                  src={
                    !item?.imageId
                      ? getRandomImage()
                      : ITEM_IMG_CDN_URL + item?.imageId
                  }
                  alt={item?.name}
                />
              )}

              <div className="menu-item-dets">
                <p className="menu-item-heading">{item?.name}</p>
                <p className="item-desc">
                  {item?.description && fn(item?.description, 55)}
                </p>
                <p className="g-price">
                  {item?.price > 0
                    ? new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(item?.price / 100)
                    : " "}
                </p>
              </div>
              <button
                className="add-button"
                onClick={() => handleAddItems(item)}
              >
                Add to Cart
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
