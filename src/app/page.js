"use client";
import OurProcess from "../components/OurProcess";
import MainHero from "../components/MainHero";
import ContactForm from "../components/Contact";
import Stack from "../components/Stack";
import Test from "../components/Test";
import WhySection from "../components/WhySection";
import AnimatedHeading from "../components/AnimatedHeading";
import OurIndustries from "../components/OurIndustries";
import GoalHeading from "../components/GoalHeading";
export default function Home() {
  return (
    <>
      <div className="bg-[#000B17]">
        <MainHero />
        <GoalHeading />

        <WhySection />
        <Stack />
        <AnimatedHeading />
        <OurProcess />

        <OurIndustries />
        <Test />
        <ContactForm />
      </div>
    </>
  );
}
