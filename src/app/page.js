"use client";
import { useState } from "react";
import LoaderComponent from "../components/Loader";
import OurProcess from "../components/OurProcess";
import MainHero from "../components/MainHero";
import ContactForm from "../components/Contact";
import OurIndustries from "../components/OurIndustries";
import Stack from "../components/Stack";
import Test from "../components/Test";
import WhySection from "../components/WhySection";
export default function Home() {
  return (
    <>
      <div className="bg-[#000B17]">
        <MainHero />
        <WhySection />
        {/* <Why /> */}
        <Stack />
        <OurProcess />
        {/* <OurIndustries /> */}
        <Test />
        <ContactForm />
      </div>
    </>
  );
}
