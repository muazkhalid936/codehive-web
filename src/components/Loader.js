"use client";
import { useState, useEffect } from "react";

const LoaderComponent = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust the speed by changing the interval

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div style={styles.loaderContainer}>
      <div style={styles.loadingBarContainer}>
        <div style={{ ...styles.loadingBar, width: `${progress}%` }}></div>
      </div>
      <div style={styles.counter}>{progress}%</div>
    </div>
  );
};

const styles = {
  loaderContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    flexDirection: "column",
  },
  loadingBarContainer: {
    width: "80%",
    height: "10px",
    backgroundColor: "#ddd",
    borderRadius: "5px",
    overflow: "hidden",
  },
  loadingBar: {
    height: "100%",
    backgroundColor: "#0070f3",
    transition: "width 0.1s ease",
  },
  counter: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    fontSize: "18px",
    color: "#333",
  },
};

export default LoaderComponent;
