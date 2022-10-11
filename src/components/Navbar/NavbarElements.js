import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #fff;
    height: 80px;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 20px 20px;
    max-width: 960px;
    gap: 20px;
`;

export const NavLogo = styled.div`
    display: flex;
    max-width: 254px;
`;

export const Img = styled.img`
    display: block;
    max-width: 100%;

    @media screen and (max-width: 768px) {
        max-width: 177px;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
`;

export const NavItem = styled.li`
    height: 80px;
    text-transform: uppercase;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavLinks = styled(LinkS)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;

    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        // display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    background-color: #00c249;
    color: #fff;
    text-align: center;
    padding: 14px 21px;
    border-radius: 8px 8px 8px 8px;
    border-bottom: 4px solid #048332;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: all300ms ease;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(359deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;

    &:hover {
        // transition: all 0.2s ease-in-out;
        // background: #00c249;
        // color: #fff;
        
        font-weight: bold;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(359deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
    }
`;




