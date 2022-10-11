import React from 'react';
import ImageStar from '../../images/image-1.webp';
import ImageCheck from '../../images/fa-check.webp';
import {  
    ReviewsContainer, 
    ReviewsWrapper, 
    ReviewsItem, 
    ReviewsInfo, 
    ReviewsInfoTitle, 
    ReviewsInfoSubtitle, 
    ReviewsImageDiv, 
    ImageDiv, 
    InfoDiv, 
    Img,
    DetailsDiv,
    DetailsDivText,
    DetailsDivFirstLetter,
    InfoTopDiv,
    InfoBottomDiv,
    InfoTopImageDiv,
    InfoTopButtonDiv,
    ImageStarDiv,
    ReviewsButton,
    Btn,
    InfoTopButtonText,
    InfoTopButtonImage,
    ColorGreen
} from './ReviewElements';

const Reviews = ({ 
    Title, Subtitle, ButtonText, getOffButtonText,
    FirstLetter1, Name1, ReviewText1, imgItem1,
    FirstLetter2, Name2, ReviewText2, imgItem2,
    FirstLetter3, Name3, ReviewText3, imgItem3,
    FirstLetter4, Name4, ReviewText4, imgItem4,
    FirstLetter5, Name5, ReviewText5, imgItem5,
    FirstLetter6, Name6, ReviewText6, imgItem6,

}) => {
  return (
    <ReviewsContainer>
        <ReviewsWrapper>
            <ReviewsInfo>
                <ReviewsInfoSubtitle>{Title}</ReviewsInfoSubtitle>
                <ReviewsInfoTitle><ColorGreen>{Subtitle}</ColorGreen></ReviewsInfoTitle>
            </ReviewsInfo>
            <ReviewsItem>
                <ReviewsImageDiv>
                    <ImageDiv>
                        <Img src={imgItem1}/>
                        <DetailsDiv>
                            <DetailsDivText>{Name1}</DetailsDivText>
                            <DetailsDivFirstLetter>{FirstLetter1}</DetailsDivFirstLetter>
                        </DetailsDiv>
                    </ImageDiv>
                    <InfoDiv>
                        <InfoTopDiv>
                            <InfoTopImageDiv>
                                <ImageStarDiv src={ImageStar} />
                            </InfoTopImageDiv>
                            <InfoTopButtonDiv>
                                <InfoTopButtonText>{ButtonText}</InfoTopButtonText>
                                <InfoTopButtonImage src={ImageCheck} />
                            </InfoTopButtonDiv>
                        </InfoTopDiv>
                        <InfoBottomDiv>
                            {ReviewText1}
                        </InfoBottomDiv>
                    </InfoDiv>
                </ReviewsImageDiv>
                <ReviewsImageDiv>
                    <ImageDiv>
                        <Img src={imgItem2}/>
                        <DetailsDiv>
                            <DetailsDivText>{Name2}</DetailsDivText>
                            <DetailsDivFirstLetter>{FirstLetter2}</DetailsDivFirstLetter>
                        </DetailsDiv>
                    </ImageDiv>
                    <InfoDiv>
                        <InfoTopDiv>
                            <InfoTopImageDiv>
                                <ImageStarDiv src={ImageStar} />
                            </InfoTopImageDiv>
                            <InfoTopButtonDiv>
                                <InfoTopButtonText>{ButtonText}</InfoTopButtonText>
                                <InfoTopButtonImage src={ImageCheck} />
                            </InfoTopButtonDiv>
                        </InfoTopDiv>
                        <InfoBottomDiv>
                            {ReviewText2}
                        </InfoBottomDiv>
                    </InfoDiv>
                </ReviewsImageDiv>
                <ReviewsImageDiv>
                    <ImageDiv>
                        <Img src={imgItem3}/>
                        <DetailsDiv>
                            <DetailsDivText>{Name3}</DetailsDivText>
                            <DetailsDivFirstLetter>{FirstLetter3}</DetailsDivFirstLetter>
                        </DetailsDiv>
                    </ImageDiv>
                    <InfoDiv>
                    <InfoTopDiv>
                            <InfoTopImageDiv>
                                <ImageStarDiv src={ImageStar} />
                            </InfoTopImageDiv>
                            <InfoTopButtonDiv>
                                <InfoTopButtonText>{ButtonText}</InfoTopButtonText>
                                <InfoTopButtonImage src={ImageCheck} />
                            </InfoTopButtonDiv>
                        </InfoTopDiv>
                        <InfoBottomDiv>
                            {ReviewText3}
                        </InfoBottomDiv>
                    </InfoDiv>
                </ReviewsImageDiv>
            </ReviewsItem>
            <ReviewsItem>
                <ReviewsImageDiv>
                    <ImageDiv>
                        <Img src={imgItem4}/>
                        <DetailsDiv>
                            <DetailsDivText>{Name4}</DetailsDivText>
                            <DetailsDivFirstLetter>{FirstLetter4}</DetailsDivFirstLetter>
                        </DetailsDiv>
                    </ImageDiv>
                    <InfoDiv>
                        <InfoTopDiv>
                            <InfoTopImageDiv>
                                <ImageStarDiv src={ImageStar} />
                            </InfoTopImageDiv>
                            <InfoTopButtonDiv>
                                <InfoTopButtonText>{ButtonText}</InfoTopButtonText>
                                <InfoTopButtonImage src={ImageCheck} />
                            </InfoTopButtonDiv>
                        </InfoTopDiv>
                        <InfoBottomDiv>
                            {ReviewText4}
                        </InfoBottomDiv>
                    </InfoDiv>
                </ReviewsImageDiv>
                <ReviewsImageDiv>
                    <ImageDiv>
                        <Img src={imgItem5}/>
                        <DetailsDiv>
                            <DetailsDivText>{Name5}</DetailsDivText>
                            <DetailsDivFirstLetter>{FirstLetter5}</DetailsDivFirstLetter>
                        </DetailsDiv>
                    </ImageDiv>
                    <InfoDiv>
                        <InfoTopDiv>
                            <InfoTopImageDiv>
                                <ImageStarDiv src={ImageStar} />
                            </InfoTopImageDiv>
                            <InfoTopButtonDiv>
                                <InfoTopButtonText>{ButtonText}</InfoTopButtonText>
                                <InfoTopButtonImage src={ImageCheck} />
                            </InfoTopButtonDiv>
                        </InfoTopDiv>
                        <InfoBottomDiv>
                            {ReviewText5}
                        </InfoBottomDiv>
                    </InfoDiv>
                </ReviewsImageDiv>
                <ReviewsImageDiv>
                    <ImageDiv>
                        <Img src={imgItem6}/>
                        <DetailsDiv>
                            <DetailsDivText>{Name6}</DetailsDivText>
                            <DetailsDivFirstLetter>{FirstLetter6}</DetailsDivFirstLetter>
                        </DetailsDiv>
                    </ImageDiv>
                    <InfoDiv>
                    <InfoTopDiv>
                            <InfoTopImageDiv>
                                <ImageStarDiv src={ImageStar} />
                            </InfoTopImageDiv>
                            <InfoTopButtonDiv>
                                <InfoTopButtonText>{ButtonText}</InfoTopButtonText>
                                <InfoTopButtonImage src={ImageCheck} />
                            </InfoTopButtonDiv>
                        </InfoTopDiv>
                        <InfoBottomDiv>
                            {ReviewText6}
                        </InfoBottomDiv>
                    </InfoDiv>
                </ReviewsImageDiv>
            </ReviewsItem>
            <ReviewsButton>
                <Btn to="off">{getOffButtonText}</Btn>
            </ReviewsButton>
        </ReviewsWrapper>
    </ReviewsContainer>
  )
}

export default Reviews