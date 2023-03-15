import Delivery from "../assets/img/delivery.png";
import React from "react";
import {useState} from 'react';
import chef from "../assets/img/chef.png";
import phone from "../assets/img/phone.png";
import pizza from "../assets/img/pizza.png";
import burger from "../assets/img/burger.png";
import pepsi from "../assets/img/pepsi.jpg";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalf } from "react-icons/fa";
import "../css/about.css";
import { Link ,Outlet } from "react-router-dom";


const About = () => {
  const [show, setShow] = useState(false);
  
  return (
    
    <>
    { show ? ( 
      <>
      <Link to={"/about"}><button className="btn5" onClick={()=>{
        setShow(false)
      }}>Hide My Profile</button></Link>
      <Outlet />
      </>
    
    ) : (
      <Link to={"profile"}><button className="btn5" onClick={()=>{
        setShow(true)
      }}>Show My Profile</button></Link>
    ) }
      <div className="about-container">
        <div>
          <p className="p1">Fastest</p>
          <p className="p2">
            Delivery <span>&</span>
          </p>
          <p className="p3">
            <span>Easy</span> Pickup
          </p>
          <div className="chef-container">
            <img src={chef} className="chef-img" />
            <div className="chef-cont">
              <p className="chef-p">When you are too lazy to cook</p>
              <p className="chef-p"> we are just a click away</p>
            </div>
          </div>
        </div>
        <div className="delivery-container">
          <img src={Delivery} />
        </div>
      </div>
      {/* first container  */}

      <div className="mobile-container">
        <img src={phone} className="phone-img" />
        <div className="avatar-img">
          <p className="mob-p">Download</p>
          <p className="mob-p">our Mobile app</p>
          <img
            src="https://www.w3schools.com/w3images/avatar2.png"
            className="avatar"
          />
          <img
            src="https://www.w3schools.com/w3images/avatar6.png"
            className="avatar"
          />
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            className="avatar"
          />
          <img
            src="https://www.w3schools.com/w3images/avatar5.png"
            className="avatar"
          />
        </div>
        {/* avatar-img end */}

        <div className="rate-count-parent">
          <div className="rating-cont">
            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300218.png"
              className="play-img"
            />
            <p className="star-icon">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </p>
            <p className="num-rat">4/5</p>
          </div>
          <div className="rating-cont">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5977/5977575.png"
              className="play-img"
            />
            <p className="star-icon">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <FaStarHalf />
            </p>
            <p className="num-rat">4.5/5</p>
          </div>
        </div>
      </div>

      {/* second container  */}
      {/* last container  */}
      <div className="text-cont">
        <div>
          <p className="text-p1">
            Our <span>best Delivered</span>
          </p>
          <p className="text-p1">Categories</p>
        </div>

        <div className="text-div">
          <p className="text-p">
            it's not just about bringing you good food from
          </p>
          <p className="text-p">restaurants,we deliver you experience</p>
        </div>
      </div>

      {/* end */}
      <div className="products-cont">
        <div>
          <img src={pizza} className="prod-img" />
          <p className="prod-cap">pizza's</p>
          <Link to="/" className="link">
            order now 🎈
          </Link>
        </div>
        <div>
          <img src={burger} className="prod-img-burg" />
          <p className="prod-cap">Burger</p>
          <Link to="/" className="link">
            order now🎈
          </Link>
        </div>

        <div>
          <img src={pepsi} className="prod-img" />
          <p className="prod-cap">Meal pack</p>
          <Link to="/" className="link">
            order now 🎈
          </Link>
        </div>
      </div>
    </>
  );
};
export default About;
