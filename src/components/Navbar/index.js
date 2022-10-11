import React from 'react';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    Img
} from './NavbarElements';

const Navbar = ({ FirstLink, SecondtLink, ThirdLink, img}) => {
  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo><Img src={img}/></NavLogo>
            <NavMenu>
                <NavItem>
                    <NavLinks to="features">{FirstLink}</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="reviews">{SecondtLink}</NavLinks>
                </NavItem>
                <NavBtn>
                    <NavBtnLink to="order">{ThirdLink}</NavBtnLink>
                </NavBtn>
            </NavMenu>
        </NavbarContainer>    
    </Nav>    
    </>
  );
};

export default Navbar
