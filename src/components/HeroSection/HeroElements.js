import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'

export const HeroContainer = styled.div`
    background: linear-gradient(180deg,#3B51C2 0.08%,#47A8F3 63.82%,#0E77A6 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 110px 30px 0 30px;
    height: auto;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 960px) {
    }
`;

export const HeroBg = styled.div`
    width: 960px;
    height: 100%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 960px) {
        flex-flow: column;
        align-items: center;
    }


`;

export const HeroInfo = styled.div`
    width: 50%;
    height: auto;

    @media screen and (max-width: 960px) {
        width: 100%;
        display: flex;
        flex-flow: column;
        text-align: center;
    }
`;

export const HeroImg = styled.div`
    width: 50%;
    height: auto;
    padding-top: 100px;
    
    @media screen and (max-width: 960px) {
        width: 100%;
        padding-top: 0;
    }
`;

export const HeroTitle = styled.h1`
    color: #fff;
    font-size: 56px;
    text-transform: uppercase;
    line-height: 55px;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const HeroText = styled.h2`
    color: #fff;
    font-size: 23px;
    margin: 20px 0 40px 0;
    font-weight: 500;
`;

export const HeroBtnDiv = styled.div`
    width: 100%;
    height: auto;
`

export const HeroBtn = styled(LinkR)`

    color: white;
    display: block;
    border-bottom: 4px solid #048332;
    border-radius: 8px;
    background-color: #00C249;
    font-size: 19px;
    font-weight: bold;
    line-height: 23px;
    text-transform: uppercase;
    padding: 19px 0;
    text-decoration: none;
    text-align: center;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: all300ms ease;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(359deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;

    &:hover {
        // transition: all 0.2s ease-in-out;
        // background-color: #259C52;
        // color: #fff;

        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(359deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
    }
`;

export const Img = styled.img`
    width: 100%;
    display: block;
    max-width: 100%;
`;

export const ColorLightGreen = styled.span`
    color: #acd601;
`;










