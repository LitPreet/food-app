import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const Nav = styled.nav`
background:#fff;
height:80px;
display:flex;
justify-content:space-around;
align-items:center;
font-size:1rem;
width:100%;
top:0;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
z-index:10;

@media screen and (max-width:960px)
{
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display:flex;
position:fixed;
justify-content:space-between;
height:80px;
z-index:10;
width:100%;
background:#fff;
padding:0 24px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const  NavLogo = styled(LinkR)`
justify-self:flex-start;
cursor:pointer;
width:40px;
display:flex;
align-items:center;
margin-left:24px;
`
export const MobileIcon = styled.div`
display:none;

@media screen and (max-width:768px)
{
    display:flex;
    transform = translate(-100%,60%);
    font-size:1.8rem;
    cursor:pointer;
    color:#000;
}

`
export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;
// margin-right:-22px;
 

@media screen and (max-width:768px)
{
    display:none;
}

`
export const NavItem = styled.li`
height:80px;
`
export const NavLinks = styled(LinkR)`
color:#000;
display:flex;
align-items:center;
text-decoration:none;
padding:0 1rem;
height:100%;
cursor:pointer;


&:hover{
    transition:all 0.3s ease-in-out;
    background: #f58934;
    color:#fff;
    

}
`
export const  NavBtn = styled.nav`
display:flex;
align-items:center;

@media screen and (max-width:768px)
{
    display:none;
}
`
export const NavBtnLink = styled(LinkR)`
border-radius:50px;
background:#f58934;
white-space:nowrap;
padding:10px 22px;
color:#fff;
font-size:16px;
border:none;
outline:none;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;
margin-right:20px;

&:hover{
    transition:all 0.2s ease-in-out;
    background:#000;
    color:#f58934;
}
`
export const NavCart = styled(LinkR)`
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;

@media screen and (max-width:768px)
{
 margin-right:20px;
}
`
export const AvatarSec = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`
export const P = styled.p`
font-size:12px;
font-weight:bold;
color:black;
text-transform:capitalize;

`
export const IMG = styled.img`
width:40px;
border-radius:20px;
`


