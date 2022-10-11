import React from 'react';

import { 
    BenefitsContainer, 
    BenefitsWrapper, 
    BenefitsItemDiv,
    BenefitsItem, 
    BenefitsImageDivOne,
    BenefitsImageDivTwo,
    BenefitsImageDivThree,
    BenefitsImageDivFour, 
    BenefitsImage, 
    BenefitsInfoDiv, 
    BenefitsInfoTitle, 
    BenefitsInfoText 
} from '../Benefits/BenefitsElements';

const Benefits = ({ Title1, Text1, img1, Title2, Text2, img2, Title3, Text3, img3, Title4, Text4, img4 }) => {
  return (
    <BenefitsContainer>
        <BenefitsWrapper>
            <BenefitsItemDiv>
            <BenefitsItem>
                <BenefitsImageDivOne>
                    <BenefitsImage src={img1}/>
                </BenefitsImageDivOne>
                <BenefitsInfoDiv>
                    <BenefitsInfoTitle>{Title1}</BenefitsInfoTitle>
                    <BenefitsInfoText>{Text1}</BenefitsInfoText>
                </BenefitsInfoDiv>
            </BenefitsItem>
            <BenefitsItem>
                <BenefitsImageDivTwo>
                    <BenefitsImage src={img2}/>
                </BenefitsImageDivTwo>
                <BenefitsInfoDiv>
                    <BenefitsInfoTitle>{Title2}</BenefitsInfoTitle>
                    <BenefitsInfoText>{Text2}</BenefitsInfoText>
                </BenefitsInfoDiv>
            </BenefitsItem>
            <BenefitsItem>
                <BenefitsImageDivThree>
                    <BenefitsImage src={img3}/>
                </BenefitsImageDivThree>
                <BenefitsInfoDiv>
                    <BenefitsInfoTitle>{Title3}</BenefitsInfoTitle>
                    <BenefitsInfoText>{Text3}</BenefitsInfoText>
                </BenefitsInfoDiv>
            </BenefitsItem>
            <BenefitsItem>
                <BenefitsImageDivFour>
                    <BenefitsImage src={img4}/>
                </BenefitsImageDivFour>
                <BenefitsInfoDiv>
                    <BenefitsInfoTitle>{Title4}</BenefitsInfoTitle>
                    <BenefitsInfoText>{Text4}</BenefitsInfoText>
                </BenefitsInfoDiv>
            </BenefitsItem>
            </BenefitsItemDiv>
        </BenefitsWrapper>
    </BenefitsContainer>
  )
}

export default Benefits