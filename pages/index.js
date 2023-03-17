import React ,{useState} from 'react'
import Navbar from '../src/components/Navbar/RealHeader';
import SideBar from '../src/components/SideBar/sidebar'
const HeaderR = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = ()=>{
        setIsOpen(!isOpen);
    }
  return (
    <>
    <SideBar isOpen = {isOpen} toggle = {toggle}/>
    <Navbar toggle = {toggle}/>
    </>
  )
}

export default HeaderR