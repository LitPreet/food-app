import React from 'react'
import '../css/shimmer.css'
const Shimmer = () => {
  return (
    <>
    <div className="shim-min">
      <div className='shim1'></div>
      <div className='shim2'></div>
      <div className='shim3'></div>
    </div>
    <div className="restaurant-list">
    {Array(15)
        .fill("")
        .map((e,index)=>(
          
    <div key={index} className="shimmer-card">
  <div className="shimmerBG media"></div>
  <div className="p-32">
    <div className="shimmerBG title-line"></div>
    <div className="shimmerBG title-line end"></div>

    <div className="shimmerBG content-line m-t-24"></div>
    <div className="shimmerBG content-line"></div>
    <div className="shimmerBG content-line"></div>
    <div className="shimmerBG content-line"></div>
    <div className="shimmerBG content-line end"></div>
  </div>
</div>
  ))}
  </div>
  </>
  )
}

export default Shimmer