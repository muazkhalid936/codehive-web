"use client";
import OurProcess from "../components/OurProcess";
import MainHero from "../components/MainHero";
import ContactForm from "../components/Contact";
import Stack from "../components/Stack";
import Test from "../components/Test";
import WhySection from "../components/WhySection";
import OurIndustries from "../components/OurIndustries";
import Connect from "../components/Connect";
import TextReveal from "../components/GoalHeading/TextReveal";
export default function Home() {
  return (
    <>
      <div className="bg-[#000B17]">
        <MainHero />
        {/* <GoalHeading /> */}
        <TextReveal text="Why You Choose Us?" />
        <WhySection />
        <TextReveal text="Our Services" />
        <Stack />
        {/* <AnimatedHeading /> */}
        <TextReveal text="Our Process" />
        <OurProcess />

        <TextReveal text="Our Industries" />
        <OurIndustries />
        <TextReveal text="Our Recent Works" />
        <Test />
        {/* <ContactForm /> */}

        <Connect />
      </div>
    </>
  );
}
