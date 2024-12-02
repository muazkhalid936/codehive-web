"use client";
import { useState } from "react"; // Import useState
import LoaderComponent from "../components/Loader";
import OurProcess from "../components/OurProcess";
import MainHero from "../components/MainHero";
import ContactForm from "../components/Contact";
import OurIndustries from "../components/OurIndustries";
import Stack from "../components/Stack";
import Test from "../components/Test";
import WhySection from "../components/WhySection";
import Why from "../components/Why";
export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      <div className="bg-[#000B17]">
        <MainHero />
        <WhySection />
        {/* <Why /> */}
        <OurProcess />
        <OurIndustries />
        <Test />
        <ContactForm />
      </div>
    </>
  );
}
