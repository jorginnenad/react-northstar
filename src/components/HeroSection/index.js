import React from 'react';
import { HeroContainer, HeroBg, HeroInfo, HeroImg, HeroTitle, HeroText, HeroBtnDiv, HeroBtn, Img, ColorLightGreen } from './HeroElements';

const HeroSection = ({ TitleWhite, TitleGreen, FirstParagraphGreen, FirstParagraphWhite, ButtonText, img}) => {
  return (
    <HeroContainer id="home">
        <HeroBg>
            <HeroInfo>
                <HeroTitle><ColorLightGreen>{TitleGreen}</ColorLightGreen>{TitleWhite}</HeroTitle>
                <HeroText><ColorLightGreen>{FirstParagraphGreen}</ColorLightGreen>{FirstParagraphWhite}</HeroText>
                <HeroBtnDiv>
                  <HeroBtn to="demo">{ButtonText}</HeroBtn>
                </HeroBtnDiv>
            </HeroInfo>
            <HeroImg>
                <Img src={img} />
            </HeroImg>
        </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection