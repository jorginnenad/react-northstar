import React from 'react';
import { 
    SetUpContainer, 
    SetUpWrapper, 
    SetUpTitleDiv, 
    SetUpTitle, 
    SetUpItemsDiv, 
    SetUpItem, 
    SetUpItemImageDiv, 
    SetUpItemImage, 
    SetUpItemInfoDiv, 
    SetUpItemText,
    SetUpButtonDiv,
    SetUpButton,
    ColorGreen
} from '../SetUpSection/SetUpElements'

const SetUp = ({ TitleBlack, TitleGreen, ButtonText, FirstParagraph1, img1, FirstParagraph2, img2, FirstParagraph3, img3 }) => {
  return (
    <SetUpContainer>
        <SetUpWrapper>
            <SetUpTitleDiv>
                <SetUpTitle>{TitleBlack}<ColorGreen>{TitleGreen}</ColorGreen></SetUpTitle>
            </SetUpTitleDiv>
            <SetUpItemsDiv>
                <SetUpItem>
                    <SetUpItemImageDiv>
                        <SetUpItemImage src={img1} />
                    </SetUpItemImageDiv>
                    <SetUpItemInfoDiv>
                        <SetUpItemText>{FirstParagraph1}</SetUpItemText>
                    </SetUpItemInfoDiv>
                </SetUpItem>
                <SetUpItem>
                    <SetUpItemImageDiv>
                        <SetUpItemImage src={img2} />
                    </SetUpItemImageDiv>
                    <SetUpItemInfoDiv>
                        <SetUpItemText>{FirstParagraph2}</SetUpItemText>
                    </SetUpItemInfoDiv>
                </SetUpItem>
                <SetUpItem>
                    <SetUpItemImageDiv>
                        <SetUpItemImage src={img3} />
                    </SetUpItemImageDiv>
                    <SetUpItemInfoDiv>
                        <SetUpItemText>{FirstParagraph3}</SetUpItemText>
                    </SetUpItemInfoDiv>
                </SetUpItem>
            </SetUpItemsDiv>
            <SetUpButtonDiv>
                <SetUpButton to="off">{ButtonText}</SetUpButton>
            </SetUpButtonDiv>
        </SetUpWrapper>
    </SetUpContainer>
  )
}

export default SetUp