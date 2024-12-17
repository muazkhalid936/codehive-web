import OurProcess from "../components/OurProcess/OurProcess";
import MainHero from "../components/MainHero";
import ContactForm from "../components/Contact";
import Stack from "../components/OurServices/Stack";
import Test from "../components/OurRecentWorks/Test";
import WhySection from "../components/WhySection/WhySection";
import OurIndustries from "../components/OurIndustries/OurIndustries";
import Navbar from "../components/Navbar";
import LongRevealHeading from "../components/LongRevealHeading/LongRevealHeading";
import ShortRevealHeading from "../components/ShortRevealHeading/ShortRevealHeading";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-[#000B17] overflow-x-hidden">
        <MainHero />
        <LongRevealHeading text="Why You Choose Us?" />
        <div className="h-[30vh]">a</div>
        <WhySection />
        <div className="-mt-20">
          <ShortRevealHeading text="Our Services" />
        </div>
        <div className="h-[20vh]">a</div>
        <Stack />

        <ShortRevealHeading text="Our Process" />
        <div className="h-[30vh]">a</div>
        <OurProcess />
        <ShortRevealHeading text="Our Industries" />

        <div className="h-[20vh]">a</div>
        <OurIndustries />
        <div className="-mt-[20vh]">
          <LongRevealHeading text="Our Recent Works" />
        </div>
        <div className="h-[40vh]">a</div>
        <Test />
        <ContactForm />
      </div>
    </>
  );
}
