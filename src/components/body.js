import React, { useEffect, useState } from "react";
import { useState } from "react";
import ReactDOM  from 'react-dom/client';
import { IMG_CDN_URL } from "../../contant";
import { restaurantList } from "../../contant";
import RestrauntCard from "./RestaurantCard";
import { BsSearch } from 'react-icons/bs';
import Shimmer from "./shimmer";
import EmblaCarousel from './carousel';
import { Link } from "react-router-dom";

function filterData(searchText,restaurants)
{
    const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase()));
    return filterData;
}
const OPTIONS = { slidesToScroll: 'auto', containScroll: 'trimSnaps' }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const Body = ()=>{
    const [searchText,setSearchText] =  useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(()=>{
    getRestaurants();
   },[]);

    async function getRestaurants()
    {
        const data = await fetch("https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } 
    return ( 
        <>
         <EmblaCarousel slides={SLIDES} options={OPTIONS} />
         <p className="pop-p">Popular Cuisines</p>
         <div className="popular-cuisines">
           <div className="biryani"><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/lbtzwnwla1pam1np4jtg" className="bir-img"/></div>
           <div className="biryani"><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/kmvbd3hyswd147u4qdn1" className="bir-img"/></div>
           <div className="biryani"><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/hvc4l0r0bgrtl6vdbbzv" className="bir-img"/></div>
           <div className="biryani"><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/ee5ynhqgyhwdoukilzfu" className="bir-img"/></div>
           <div className="biryani"><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/iwvt76wvh3a7dxmkljxd" className="bir-img"/></div>
           <div className="biryani"><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/vntl1lutut9bqsxjninx" className="bir-img"/></div>
           <div className="biryani"><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/wfzaxacltlxyi4shmm2u" className="bir-img"/></div>
           <div className="biryani"><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/hk7gdfeiwmy5nx6prv97" className="bir-img"/></div>
           <div className="biryani"><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/pa6ydsixfemhr7r9rjzc" className="bir-img"/></div>
         </div>
         <div className="search-container">
          <input type="text" className="search-input-box" placeholder="Search for restaurants and food"  value={searchText}
             onChange={(e)=> setSearchText(e.target.value)
             }></input>
          <button className="search-button" onClick={()=>{
            const data = filterData(searchText,allRestaurants);
            setFilteredRestaurants(data);
          }}>< BsSearch className="bs-search"/></button>
          
         </div>
        { (allRestaurants.length === 0) ? <Shimmer/> :
            <div className="restaurant-list">
         {
            filteredRestaurants.map((restaurant)=>{
                return(   <Link
                  to={"/restaurant/" + restaurant.data.id}
                  key={restaurant.data.id}
                >
                  <RestrauntCard {...restaurant.data} />
                </Link>);
                
            })
         } </div>

        }
            </>
                       
    )
}
export default Body;