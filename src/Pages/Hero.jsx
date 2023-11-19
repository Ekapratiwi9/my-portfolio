import React from "react";
import HeroTitle from "../Components/HeroTitle";
import HeroButton from "../Components/HeroButton";
import HeroSosmed from "../Components/HeroSosmed";

const Hero = () => {
  return (
    <div className="h-screen">
      <HeroTitle />
      <HeroButton />
      <HeroSosmed />
    </div>
  );
};

export default Hero;
