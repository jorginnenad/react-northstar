import React from 'react'
import { InfoContainer, InfoWrapper, InfoTitleDiv, InfoTitleText, InfoBodyDiv, InfoBodyImgDiv, InfoImg, InfoBodyTextDiv, InfoText, ColorGreen } from './InfoElements'

const InfoSection = ({TitleBlack, TitleGreen, FirstParagraph, SecondParagraph, ThirdParagraph, img}) => {
  return (
    <>
    <InfoContainer>
        <InfoWrapper>
            <InfoTitleDiv>
                <InfoTitleText>{TitleBlack}<ColorGreen>{TitleGreen}</ColorGreen></InfoTitleText>
            </InfoTitleDiv>
            <InfoBodyDiv>
              <InfoBodyImgDiv>
                <InfoImg src={img}></InfoImg>
              </InfoBodyImgDiv>
              <InfoBodyTextDiv>
                <InfoText>
                {FirstParagraph}
                </InfoText>
                <InfoText>
                {SecondParagraph}
                </InfoText>
                <InfoText>
                {ThirdParagraph}
                </InfoText>
              </InfoBodyTextDiv>
            </InfoBodyDiv>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection