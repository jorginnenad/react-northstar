import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

export const SetUpContainer = styled.div`
    background: #f5f5f5;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SetUpWrapper = styled.div`
    max-width: 960px;
    height: 100%;
    display: flex;
    flex-flow: column;
    gap: 20px;
    padding-bottom: 70px;
`;

export const SetUpTitleDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SetUpTitle = styled.h2`
    font-size: 43px;
    line-height: 53px;
    text-align: center;
    text-transform: uppercase;
    padding: 50px 20px 40px;

    @media screen and (max-width: 768px) {
        font-size: 28px;
        line-height: 33px;
        padding: 50px 20px 10px;
    }
`;

export const SetUpItemsDiv = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 20px;
    margin-bottom: 50px;
    
    @media screen and (max-width: 768px) {
        flex-flow: column;
        align-items: center;
        padding: 0 20px;
        margin-bottom: 30px;
    }
`;

export const SetUpItem = styled.div`
    width: 30%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
    border: 1px solid #d4d4d4;
    
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const SetUpItemImageDiv = styled.div`
    width: 100%;
    height: auto;
`;

export const SetUpItemImage = styled.img`
    width: 100%;
`;

export const SetUpItemInfoDiv = styled.div`
    width:100%;
    padding: 15px;
`;

export const SetUpItemText = styled.p`
    font-size: 17px;
    line-height: 27px;
`;

export const SetUpButtonDiv = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    width: 100%;
    height: auto;

    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
`;

export const SetUpButton = styled(LinkR)`
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
    width: 50%;
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

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const ColorGreen = styled.span`
    color: #00c249;
`;

