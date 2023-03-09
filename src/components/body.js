import React, { useState } from "react";
import { useState } from "react";
import ReactDOM  from 'react-dom/client';
import { IMG_CDN_URL } from "../../contant";
import { restaurantList } from "../../contant";
import RestrauntCard from "./RestaurantCard";
import { BsSearch } from 'react-icons/bs';


const Body = ()=>{
    const [restaurants,setRestaurants] = useState(restaurantList);
    return ( 
        <>
        
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
          <input type="text" className="search-input-box" placeholder="Search for restaurants and food"/>
          <button className="search-button">< BsSearch className="bs-search"/></button>
         </div>

            <div className="restaurant-list">
         {
            restaurants.map((restaurant)=>{
                return <RestrauntCard key={restaurant.id} {...restaurant.data}/>
            })
         }
           
            </div>
            </>
                       
    )
}
export default Body;