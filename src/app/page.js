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

        <div className="container">
          <div className="flex flex-1 h-[50vh] justify-center items-center mx-auto text-5xl text-white font-bold">
            Our Industry
          </div>
        </div>
        <OurIndustries />
        <Test />
        <ContactForm />
      </div>
    </>
  );
}
