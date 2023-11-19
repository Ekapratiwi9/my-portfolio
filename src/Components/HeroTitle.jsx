import React from "react";

const HeroTitle = () => {
  return (
    <div className=" flex flex-col gap-5  lg:px-40 mt-40 justify-center lg:justify-start lg:items-start px-5 items-center">
      <h4 className="text-xl lg:text-3xl font-semibold">Hi, My Name Is</h4>
      <h1 className="lg:text-8xl text-brown text-7xl font-extrabold text-center">
        Suniarsih Eka Pratiwi
      </h1>
      <h4 className="text-xl lg:text-4xl font-bold">I'm Software Engineer</h4>
      <p className="text-center font-medium text-gray lg:text-md lg:font-semibold">
        "A Software Engineer who enjoys learning new things and is capable of
        creating creative and responsive websites."
      </p>
    </div>
  );
};

export default HeroTitle;
