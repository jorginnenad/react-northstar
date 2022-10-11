import React from 'react';
import { FooterContainer, FooterWrap, FooterInfo, FooterTextDiv, FooterLogo, FooterLinks, FooterText, FooterLink, Img } from './FooterElements';

const Footer = ({ CopyrightText, FirstLink, SecondtLink, ThirdLink, img}) => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterInfo>
                <FooterTextDiv>
                    <FooterText>{CopyrightText}</FooterText>
                </FooterTextDiv>
                <FooterLinks>
                    <FooterLink>{FirstLink}</FooterLink>
                    <FooterLink>{SecondtLink}</FooterLink>
                    <FooterLink>{ThirdLink}</FooterLink>
                </FooterLinks>
            </FooterInfo>
            <FooterLogo>
                <Img src={img}/>
            </FooterLogo>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer