"use client";
import OurProcess from "../components/OurProcess";
import MainHero from "../components/MainHero";
import Carousel from "../components/carousel";
import ContactForm from "../components/Contact";
import OurIndustries from "../components/OurIndustries";
import Stack from "../components/Stack";
import Test from "../components/Test";
export default function Home() {
  return (
    <>
      <div className="bg-[#000B17]">
        <MainHero />
        <OurProcess />
        <OurIndustries />
        {/* <Carousel /> */}
        <div className="container mx-auto">
          <p className="text-white text-center text-2xl md:text-5xl font-bold">
            Our Recent Work
          </p>
        </div>
        <Test />
        <Stack />
        <ContactForm />
      </div>
    </>
  );
}
