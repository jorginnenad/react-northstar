import styled from "styled-components";

export const BenefitsContainer = styled.div`
    background: #fff;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    // @media screen and (max-width: 768px) {
    //     display: none;
    // }
`;

export const BenefitsWrapper = styled.div`
    width: 960px;
    height: 100%;
    display: flex;
    align-items: stretch;
    flex-flow: column;
    gap: 20px;
    margin: 0 20px;
`;

export const BenefitsItemDiv = styled.div`
    width: 100%;
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    padding: 100px 0;
`;

export const BenefitsItem = styled.div`
    width: 25%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
`;

export const BenefitsImageDivOne = styled.div`
    width: 100%;
    margin: 0 auto 25px;
    justify-content: center;
    display: flex;
    max-width: 52px;
    min-height: 50px;
}
`;

export const BenefitsImageDivTwo = styled.div`
    width: 100%;
    margin: 0 auto 25px;
    justify-content: center;
    display: flex;
    max-width: 36px;
    min-height: 50px;
}
`;

export const BenefitsImageDivThree = styled.div`
    width: 100%;
    margin: 0 auto 25px;
    justify-content: center;
    display: flex;
    max-width: 61px;
    min-height: 50px;
}
`;

export const BenefitsImageDivFour = styled.div`
    width: 100%;
    margin: 0 auto 25px;
    justify-content: center;
    display: flex;
    max-width: 53px;
    min-height: 50px;
}
`;

export const BenefitsImage = styled.img`
    width: 100%;
`;

export const BenefitsInfoDiv = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 10px;
    align-items: center;
    
`;

export const BenefitsInfoTitle = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
`;

export const BenefitsInfoText = styled.div`
    font-size: 17px;
    color: #121212;
    line-height: 27px;
    text-align: center;
`;
