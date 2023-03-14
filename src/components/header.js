import React from 'react';
import ReactDOM  from 'react-dom/client';
import { TbDiscount2 } from 'react-icons/tb';
import { BsSearch } from 'react-icons/bs';
import { IoHelpBuoy } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { BsFillCartCheckFill } from 'react-icons/bs';

import swiggy from '../assets/img/Swiggy-Logo-PNG.png'
import { Link } from 'react-router-dom';

const Logo = ()=>{
    return (
        <>

        <div className="logo-detail">
        <a href="/">
            <img src={swiggy} alt="logo" className="logo"/>
            
        </a>

         <div className="eat_currentAddress_head">
         {/* <span className='other'><a href='/'>Other</a></span>
        

         <span className='add'>
           M30 sec-5 Gurugram, India?</span> */}
     </div>
     </div>
     </>
    )
}
 
const Header = ()=>{
    return(
        <div className="navbar">
        <Logo />
           <ul className="nav-ul">
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li className="nav-items" id='nav-link'><BsSearch className='icon'/> search</li></Link>
                <Link to="/contact"><li className="nav-items"><TbDiscount2 className='icon'/>offers</li></Link>
                <Link to="/contact"><li className="nav-items" id='nav-link'><IoHelpBuoy className='icon'/> help</li></Link>
                <Link to="/contact"><li className="nav-items" id='nav-link'><BsFillCartCheckFill className='icon'/>cart</li></Link>
                <Link to="/contact"><li className="nav-items" id='nav-link'><FaUser className='icon'/> sign in</li></Link>

           </ul>
        </div>
    )
}
export default Header
