import React from "react";
import Logo from "../../assets/img/Swiggy-Logo-PNG.png";
import Cart from '../../assets/img/trolley.png'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavLinks,
  NavItem,
  NavMenu,
  NavBtnLink,
  NavBtn,
  AvatarSec,P,IMG,NavCart
} from "./NavbarElement";
import { FaBars } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

const Navbar = ({ toggle }) => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const cartItems = useSelector((store) => store.cart.items)

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={Logo} className="logo-img" />
          </NavLogo>
          <div className="mob-art">
          <NavCart to="/cart"><img src={Cart} className="trolley"/><span className="cart-num">{cartItems.length}</span></NavCart>

          <MobileIcon onClick={toggle}>
          
          { isAuthenticated && <AvatarSec>
              <IMG src={user.picture} className="avatar-user"/>
              <P>{user.name}</P>
            </AvatarSec>}
            <FaBars />
          </MobileIcon>
          </div>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/instamart">Instamart</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
            
          <NavCart to="/cart"><img src={Cart} className="trolley"/><span className="cart-num">{cartItems.length}</span></NavCart>
          </NavMenu>
          <NavBtn>
            {isAuthenticated ?  (
              <NavBtnLink
              type="button"
              onClick={(e) => {
                e.preventDefault();
                logout({ logoutParams: { returnTo: window.location.origin } });
              }}
              >
                Log Out
              </NavBtnLink>
            ): (
              <NavBtnLink   type="button"  onClick={(e) => {
                e.preventDefault();
                loginWithRedirect();
              }}>
                Log In
              </NavBtnLink>
            )}
            { isAuthenticated && <AvatarSec>
              <IMG src={user.picture} className="avatar-user"/>
              <P>{user.name}</P>
            </AvatarSec>}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
