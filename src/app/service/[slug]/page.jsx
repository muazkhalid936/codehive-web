import React from 'react';
import { services } from '../../../data';
import NavbarPages from '../../../components/NavbarPages';
import Hero from '../../../components/Hero';
import Banner from '../../../components/Banner';
import SuccessMarquee from '../../../components/SuccessMarquee';
import Features from '../../../components/Features';
import WhatMakesUsDifferent from '../../../components/WhatMakesUsDifferent';
import Testimonials from '../../../components/Testimonials';
import ConnectContact from '../../../components/ConnectContact';
import AdvantagesSection from '../../../components/AdvantagesSection';
const page = async ({ params }) => {
  const slug = await params.slug;
  const service = services?.find((service) => service.slug === slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <NavbarPages isBlack={service?.heroData?.bgImage} />
      <Hero {...service.heroData} />
      <SuccessMarquee />
      {service.advanceSection && (
        <AdvantagesSection data={service.advanceSection} />
      )}
      {service.bannerData && <Banner {...service.bannerData} />}
      <Features data={service.featuresData} />
      <WhatMakesUsDifferent data={service.makesDifferentData} />
      <Banner {...service.bannerDataTwo} />
      <Testimonials testimonials={service.testimonialsData} />
      <ConnectContact sliderData={service.featureSlider} />
    </div>
  );
};

export default page;
