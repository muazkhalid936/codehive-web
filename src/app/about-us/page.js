import React from 'react';
import Hero from '../../components/Hero';
import Testimonials from '../../components/Testimonials';
import WhoWeAre from '../../components/WhoWeAre';
import OurMission from '../../components/OurMission';
import Features from '../../components/Features';
import PartnerWithTopPeople from '../../components/PartnerWithTopPeople';
import WhatMakesUsDifferent from '../../components/WhatMakesUsDifferent';
import SuccessMarquee from '../../components/SuccessMarquee';
import ConnectContact from '../../components/ConnectContact';
import {
  aboutHeroData,
  aboutScreenFeaturesData,
  aboutTestimonialsData,
  WhatMakesUsDifferentData,
} from '../../data';
import NavbarPages from '../../components/NavbarPages';

const AboutUs = () => {
  return (
    <div>
      <NavbarPages />
      {/* Hero Section */}
      <Hero {...aboutHeroData} />
      <SuccessMarquee />
      <WhoWeAre />
      <OurMission />
      <Features data={aboutScreenFeaturesData} />
      <WhatMakesUsDifferent data={WhatMakesUsDifferentData} />
      <PartnerWithTopPeople />
      <Testimonials testimonials={aboutTestimonialsData} />
      <ConnectContact />
    </div>
  );
};

export default AboutUs;
