import React from "react";
import { Animated } from "react-animated-css";

const Footer = () => {
  return (
    <div className="flex justify-center bg-gray-700 text-white">
      <Animated animationIn="animate__zoomIn" animationOut="animate__zoomOut" isVisible={true}>
      <footer className="">footer</footer>
      </ Animated >
    </div>
  );
};

export default Footer;
