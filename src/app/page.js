"use client";
import OurProcess from "../components/OurProcess";
import MainHero from "../components/MainHero";
import ContactForm from "../components/Contact";
import Stack from "../components/Stack";
import Test from "../components/Test";
import WhySection from "../components/WhySection";
import OurIndustries from "../components/OurIndustries";
import Process from "../components/Process/page";
export default function Home() {
  return (
    <>
      <div className="bg-[#000B17]">
        <MainHero />
        <WhySection />
        <Stack />
        {/* <div className="container">
          <Process />
        </div> */}
        {/* <OurProcess /> */}
        {/* <Indus /> */}
        <OurIndustries />
        <Test />
        <ContactForm />
      </div>
    </>
  );
}
