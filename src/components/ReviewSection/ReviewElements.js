import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

export const ReviewsContainer = styled.div`
    background: #f5f5f5;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ReviewsWrapper = styled.div`
    max-width: 960px;
    height: 100%;
    display: flex;
    flex-flow: column;
    gap: 20px;
    padding-bottom: 70px;
`;

export const ReviewsInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    gap: 10px;
    padding: 90px 20px 40px;

    @media screen and (max-width: 768px) {
        padding: 40px 20px 10px;
    }
`;

export const ReviewsInfoTitle = styled.h2`
    font-size: 43px;
    line-height: 53px;
    text-align: center;
    
    @media screen and (max-width: 768px) {
        font-size: 28px;
        line-height: 33px;
    }
`;

export const ReviewsInfoSubtitle = styled.h3`
    font-size: 30px;
    line-height: 47px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 18px;
        line-height: 25px;
    }
`;

export const ReviewsItem = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;

    @media screen and (max-width: 768px) {
        flex-flow: column;
        align-items: center;
    }
`;

export const ReviewsImageDiv = styled.div`
    width: 30%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 20px;
    }
`;

export const ImageDiv = styled.div`
    width: 100%;
    height: auto;
    position: relative;

`;
export const InfoDiv = styled.div`
    width: 100%;
    background-color: #edf8f0;
    padding: 20px;

`;

export const InfoTopDiv = styled.div`
    margin: 0 0 25px;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: flex;
    }
`;

export const InfoBottomDiv = styled.div`

`;

export const InfoTopImageDiv = styled.div`
    width: 100%;
    margin: 0 auto 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;

    @media screen and (max-width: 768px) {
        width: 50%;
        margin: 0 20px 0 0;
    }
`;

export const InfoTopButtonDiv = styled.div`
    background-color: #107e10;
    padding: 5px 10px 5px 10px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px 5px 5px 5px;
    color: #fff;
    font-size: 14px;
    gap: 5px;

    @media screen and (max-width: 768px) {
        width: 50%;
        max-height: 25px;
    }
`;

export const InfoTopButtonText = styled.div`

`;

export const InfoTopButtonImage = styled.img`
    width: 15px;
    height: 15px;
`;

export const ImageStarDiv = styled.img`
    width: 150px;   

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const Img = styled.img`
    width: 100%;

`;

export const DetailsDiv = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 15px;
    left: 25px;
    flex-direction: row-reverse;
`;

export const DetailsDivText = styled.div`
    display: flex;
    align-items: center;
    min-width: 25px;
    padding: 3px 5px 3px 27px;
    margin: 0 0 0 -20px;
    color: #000;
    border-radius: 6.5px 6.5px 6.5px 6.5px;
    height: 32px;
    background-color: #dadbdd;
    font-size: 22px;
    line-height: 26px;
    font-weight: 700;
`;

export const DetailsDivFirstLetter = styled.div`
    display: flex;
    align-items: center;
    margin: 0;
    color: #fff;
    height: 36px;
    width: 36px;
    text-align: center;
    border-radius: 50% 50% 50% 50%;
    justify-content: center;
    background-color: #216a28;
    font-size: 22px;
    line-height: 26px;
    font-weight: 700;
}
`;

export const ReviewsButton = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    width: 100%;
    height: auto;

    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
`;

export const Btn = styled(LinkR)`
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

