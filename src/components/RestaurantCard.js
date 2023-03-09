import { IMG_CDN_URL } from "../../contant"
import { TbDiscount2 } from 'react-icons/tb';
const RestrauntCard =({name,cuisines,cloudinaryImageId,lastMileTravelString,costForTwoString,slaString,avgRating})=>{
    
    return (
        <div className='card'>
            <img src = {IMG_CDN_URL + cloudinaryImageId} className="card-img"/>
            <p className="f-name">{name}</p>
            <p className="cuisnines">{cuisines.join(',')}</p>
            <div className="star-row">
               <p className="rate"><img className="star" src="https://cdn-icons-png.flaticon.com/512/3334/3334338.png"/>{avgRating}</p>
               <p className="time">{slaString}</p>
               <p className="price">{costForTwoString}</p>
              
            </div>
            <p className="offer">< TbDiscount2 /> flat ₹125 off on order above ₹499</p>
            <p className="delivery">< TbDiscount2 />free delivery</p>
        </div>
    )
}

export default RestrauntCard