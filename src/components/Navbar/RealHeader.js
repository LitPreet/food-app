import React from 'react'
import {Nav,NavbarContainer, NavLogo , MobileIcon,NavLinks, NavItem, NavMenu,NavBtnLink,NavBtn } from './NavbarElement'
 import { FaBars } from 'react-icons/fa';
const Navbar = ({toggle}) => {
  return (
   <>
   <Nav>
    <NavbarContainer>
        <NavLogo to="/">
            Swiggy
        </NavLogo>
        <MobileIcon onClick={toggle}> 
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/">Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/contact">Contact
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/about">About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/signup">Sign up
            </NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to = "/signin">Sign In</NavBtnLink>
        </NavBtn>
    </NavbarContainer>
   </Nav>
   </>

  )
}

export default Navbar