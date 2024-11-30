"use client";
import OurProcess from "../components/OurProcess";
import MainHero from "../components/MainHero";
import Carousel from "../components/carousel";
import ContactForm from "../components/Contact";
import OurIndustries from "../components/OurIndustries";
import Stack from "../components/Stack";
export default function Home() {
  return (
    <>
      <div className="bg-[#000B17]">
        <MainHero />
        <OurProcess />
        <OurIndustries />
        <Carousel />

        <Stack />
        <ContactForm />
      </div>
    </>
  );
}
