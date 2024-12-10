// components/AnimatedHeading.js
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";
import styles from "./AnimatedHeading.module.css"; // Import CSS Module

gsap.registerPlugin(ScrollTrigger);

const AnimatedHeading = ({ text }) => {
  useEffect(() => {
    const heading = document.getElementById("heading");
    const splitText = text.split("");
    let spanTag = "";

    splitText.forEach((elem) => {
      spanTag += `<span>${elem}</span>`;
    });
    heading.innerHTML = spanTag;

    const timeline = gsap.timeline();

    timeline.to("#heading span", {
      opacity: 0,
      duration: 1,
      color: "green",
      stagger: 1,
      scrollTrigger: {
        trigger: "#heading span",
        scrub: true,
        start: "top 50%",
        end: "bottom 40%",
      },
    });
  }, [text]);

  return (
    <div className={styles.container}>
      <h1 id="heading" className={styles.heading}>
        {text}
      </h1>
    </div>
  );
};

// Define prop types for the component
AnimatedHeading.propTypes = {
  text: PropTypes.string.isRequired, // `text` is required and must be a string
};

export default AnimatedHeading;
