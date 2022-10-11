import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import SetUp from '../components/SetUpSection';
import Benefits from '../components/Benefits';
// import Slider from '../components/Slider';
import Reviews from '../components/ReviewSection';
import Footer from '../components/Footer';
import { navTextObj } from '../components/Navbar/Data';
import { heroTextObj } from '../components/HeroSection/Data';
import { infoTextObj } from '../components/InfoSection/Data';
import { reviewItemTitle } from '../components/ReviewSection/Data';
import { reviewItemOne } from '../components/ReviewSection/Data';
import { reviewItemTwo } from '../components/ReviewSection/Data';
import { reviewItemThree } from '../components/ReviewSection/Data';
import { reviewItemFour } from '../components/ReviewSection/Data';
import { reviewItemFive } from '../components/ReviewSection/Data';
import { reviewItemSix } from '../components/ReviewSection/Data';
import { footerTextObj } from '../components/Footer/Data';
import { SetUpTextObjHeading } from '../components/SetUpSection/Data';
import { SetUpTextObjOne } from '../components/SetUpSection/Data';
import { SetUpTextObjTwo } from '../components/SetUpSection/Data';
import { SetUpTextObjThree } from '../components/SetUpSection/Data';
import { BenefitsObjOne } from '../components/Benefits/Data';
import { BenefitsObjTwo } from '../components/Benefits/Data';
import { BenefitsObjThree } from '../components/Benefits/Data';
import { BenefitsObjFour } from '../components/Benefits/Data';
// import { SliderData } from '../components/Slider/SliderData';



const Home = () => {
  return (
    <>
    <Navbar {...navTextObj} />
    <HeroSection {...heroTextObj} />
    <InfoSection {...infoTextObj} />
    <SetUp {...SetUpTextObjHeading} {...SetUpTextObjOne} {...SetUpTextObjTwo} {...SetUpTextObjThree}/>
    <Benefits {...BenefitsObjOne} {...BenefitsObjTwo} {...BenefitsObjThree} {...BenefitsObjFour} />
    {/* <Slider slides={SliderData} /> */}
    <Reviews 
    {...reviewItemTitle} 
    {...reviewItemOne} 
    {...reviewItemTwo} 
    {...reviewItemThree} 
    {...reviewItemFour} 
    {...reviewItemFive} 
    {...reviewItemSix}/>
    <Footer {...footerTextObj} />
    </>
  )
}

export default Home