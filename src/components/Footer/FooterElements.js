import styled from "styled-components";


export const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const FooterWrap = styled.div`
    width: 960px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    padding: 50px 0;
    gap: 30px;

    @media screen and (max-width: 960px) {
        padding: 50px;
    }

    @media screen and (max-width: 768px) {
        padding: 50px 0;
    }
`
export const FooterInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-flow: column-reverse;
        gap: 20px;
    }
`
export const FooterTextDiv = styled.div`
    display: flex;
`
export const FooterLogo = styled.div`
    width: 100%;
    max-width: 120px;
    margin: 0 auto;
`
export const FooterLinks = styled.div`
    display: flex;
`
export const FooterText = styled.p`
    font-size: 13px;
    line-height: 13px;
    color: #8f8f8f;
`
export const FooterLink = styled.p`
    margin-right: 5px;
    font-size: 13px;
    line-height: 13px;
    color: #8f8f8f;
`
export const Img = styled.img`
    width: 100%;

    @media screen and (max-width: 530px) {
        padding: 0 10px;
    }
`