import { Splide, SplideSlide } from "@splidejs/react-splide";
import Card from "./Card";
import "@splidejs/react-splide/css";

const Carousel = () => {
  const settings = {
    type: "slide", // Type of slider
    perPage: 3, // Show 3 slides at a time
    perMove: 1, // Move 1 slide at a time
    gap: "1rem", // Add spacing between slides
    pagination: false, // Hide dots if not needed
    arrows: false, // Enable navigation arrows
    dots:false,
    breakpoints: {
      1024: {
        perPage: 2, // For tablet and smaller screens, show 2 slides
      },
      768: {
        perPage: 1, // For mobile and very small screens, show 1 slide
      },
    },
  };

  return (
    <Splide
      options={settings}
      aria-label="My Favorite Images"
      className="container flex justify-center items-center px-40 mx-auto"
    >
      <SplideSlide className="flex justify-center items-center">
        <Card
          head="Wordsmith – AI"
          para="Writing and summarizing AI assistant platform."
          bgImg="url('/Homapage/carosuel/wordsmith AI.png')"
        />
      </SplideSlide>
      <SplideSlide className="flex justify-center items-center">
        <Card
          head="Laam – AI"
          para="Writing and summarizing AI assistant platform."
          bgImg="url('/Homapage/carosuel/laam.jpg')"
        />
      </SplideSlide>
      <SplideSlide className="flex justify-center items-center">
        <Card
          head="Legal Wise – AI"
          para="Writing and summarizing AI assistant platform."
          bgImg="url('/Homapage/carosuel/legal wise.jpg')"
        />
      </SplideSlide>
      <SplideSlide className="flex justify-center items-center">
        <Card
          head="Saloon Booking – Flutter"
          para="Writing and summarizing AI assistant platform."
          bgImg="url('/Homapage/carosuel/saloon booking.jpg')"
        />
      </SplideSlide>
      <SplideSlide className="flex justify-center items-center">
        <Card
          head="Wordsmith – AI"
          para="Writing and summarizing AI assistant platform."
          bgImg="url('/Homapage/carosuel/wordsmith AI.png')"
        />
      </SplideSlide>
      <SplideSlide className="flex justify-center items-center">
        <Card
          head="Wordsmith – AI"
          para="Writing and summarizing AI assistant platform."
          bgImg="url('/Homapage/carosuel/wordsmith AI.png')"
        />
      </SplideSlide>
      <SplideSlide className="flex justify-center items-center">
        <Card
          head="Wordsmith – AI"
          para="Writing and summarizing AI assistant platform."
          bgImg="url('/Homapage/carosuel/wordsmith AI.png')"
        />
      </SplideSlide>
    </Splide>
  );
};

export default Carousel;
