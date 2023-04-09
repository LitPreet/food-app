import React from "react";
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './sidebarElement';
import { useAuth0 } from "@auth0/auth0-react";
const SideBar = ({isOpen,toggle})=>{
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    return (
<>
<SidebarContainer isOpen = {isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
        <CloseIcon />
    </Icon>
    <SidebarWrapper>
        <SidebarMenu>
        <SidebarLink to="/" onClick={toggle}>
                Home
            </SidebarLink>
            <SidebarLink to="/about" onClick={toggle}>
                About
            </SidebarLink>
            <SidebarLink to="/instamart" onClick={toggle}>
                Instamart
            </SidebarLink>
          
        </SidebarMenu>
        <SideBtnWrap>
        {isAuthenticated ?  (
              <SidebarRoute
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </SidebarRoute>
            ): (
              <SidebarRoute onClick={() => loginWithRedirect()}>
                Log In
              </SidebarRoute>
            )}
        
        </SideBtnWrap>
    </SidebarWrapper>
</SidebarContainer>
</>
    )
}
export default SideBar;