"use client";
import OurProcess from "../components/OurProcess";
import MainHero from "../components/MainHero";
import ContactForm from "../components/Contact";
import Stack from "../components/Stack";
import Test from "../components/Test";
import WhySection from "../components/WhySection";
import AnimatedHeading from "../components/AnimatedHeading";
import OurIndustries from "../components/OurIndustries";
import Process from "../components/Process/page";
export default function Home() {
  return (
    <>
      <div className="bg-[#000B17]">
        <MainHero />
        {/* <AnimatedHeading text="Why You Choose Us?" /> */}

        <div class="gradient h-screen w-screen flex justify-center items-center text-4xl font-bold bg-clip-text text-transparent">
          <h1 className="text-5xl text-white">Define your goal</h1>
        </div>
        <WhySection />
        <Stack />

        <AnimatedHeading text="Our Process" />
        {/* <div className="container">
          <Process />
        </div> */}
        <OurProcess />
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
