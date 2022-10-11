import styled from "styled-components";

export const InfoContainer = styled.div`
    background: #fff;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const InfoWrapper = styled.div`
    max-width: 960px;
    height: 100%;
    display: flex;
    flex-flow: column;

    @media screen and (max-width: 960px) {
        width: 100%;
        padding: 0 50px;
    }

    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
`;

export const InfoTitleDiv = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 80px 0 50px 0;

    @media screen and (max-width: 768px) {
        margin: 30px 0 20px 0;
    }

`;

export const InfoBodyDiv = styled.div`
    display: flex;
    flex-flow: row;
    gap: 30px;
    margin-bottom: 100px;

    @media screen and (max-width: 768px) {
        flex-flow: column-reverse;
        gap: 20px;


    }
`;

export const InfoTitleText = styled.h2`
    font-size: 43px;
    text-align: center;
    text-transform: uppercase;
    
    @media screen and (max-width: 768px) {
        font-size: 28px;
    }
`;

export const InfoBodyImgDiv = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const InfoBodyTextDiv = styled.div`
    width: 50%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const InfoImg = styled.img`
    width: 100%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }

`;

export const InfoText = styled.p`
    padding-bottom: 20px;
    font-size: 17px;
    line-height: 27px;

    @media screen and (max-width: 768px) {
    }
`;

export const ColorGreen = styled.span`
    color: #00c249;
`;







