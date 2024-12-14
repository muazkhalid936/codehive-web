"use client";
import OurProcess from "../components/OurProcess/OurProcess";
import MainHero from "../components/Hero/MainHero";
import ContactForm from "../components/ContactForm/Contact";
import Stack from "../components/OurServices/Stack";
import Test from "../components/OurRecentworks/Test";
import WhySection from "../components/WhySection/WhySection";
import OurIndustries from "../components/OurIndustries/OurIndustries";
import Connect from "../components/ConnectForm/Connect";
import TextReveal from "../components/AnimatedHeading/TextReveal";
export default function Home() {
  return (
    <>
      <div className="bg-[#000B17]">
        <MainHero />
        <TextReveal text="Why You Choose Us?" />
        <WhySection />
        <TextReveal text="Our Services" />
        <Stack />
        <TextReveal text="Our Process" />
        <OurProcess />
        <TextReveal text="Our Industries" />
        <OurIndustries />
        <TextReveal text="Our Recent Works" />
        <Test />
        <Connect />
      </div>
    </>
  );
}
