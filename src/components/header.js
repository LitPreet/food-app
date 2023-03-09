import { TbDiscount2 } from 'react-icons/tb';
import { BsSearch } from 'react-icons/bs';
import { IoHelpBuoy } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { BsFillCartCheckFill } from 'react-icons/bs';
// import { Link } from 'react-router-dom';

const Logo = ()=>{
    return (
        <>
        <div className="logo-detail">
        <a href="/">
            <img src="http://themes.potenzaglobalsolutions.com/html/the-zayka/assets/images/logo.png" alt="logo" className="logo"/>
        </a>
         <div className="eat_currentAddress_head">
         <span className='other'><a href='/'>Other</a></span>
        

         <span className='add'>
           M30 sec-5 Gurugram, India?</span>
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
            <li className="nav-items" id='nav-link'><a href='/'><BsSearch className='icon'/> search</a></li>
            <li className="nav-items" ><a href="/"><TbDiscount2 className='icon'/>offers</a></li>
            <li className="nav-items" id='nav-link'><a href="/"><IoHelpBuoy className='icon'/> help</a></li>
            <li className="nav-items" id='nav-link'><a href="/"><FaUser className='icon'/> sign in</a></li>
            <li className="nav-items" id='nav-link'> <a href="/"><BsFillCartCheckFill className='icon'/>cart</a></li>
           </ul>
        </div>
    )
}
export default Header
