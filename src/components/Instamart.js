import React from "react"
import Mart from '../assets/img/food_delivery.webp'
import Maart from '../assets/img/instamart.png'
import '../css/InstaMart.css'
const Instamart = ()=>{
    return(
        <div className="instaMart-sec">
            <img src={Maart}  className="insta-logo"/>
            <p className="insta-h">Coming Soon in your area</p>
            <p className="insta-p">Never wait for groceries again</p>
            <img src = {Mart}  className="Mart-img"/>

        </div>
    )
}
export default Instamart