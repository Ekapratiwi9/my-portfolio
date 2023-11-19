import React, { useEffect } from "react";
import github from "../Components/icon/github.svg";
import instagram from "../Components/icon/instagram.svg";
import linkedin from "../Components/icon/linkedin.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSosmed = () => {
  const url_linkedin = "https://www.linkedin.com/in/suniarsih-eka-pratiwi";
  const url_github = "https://github.com/Ekapratiwi9";
  const url_instagram = "https://www.instagram.com/pratiwi.eka29/";
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="lg:absolute lg:bottom-0 lg:right-5">
      <a href={url_github}>
        <img data-aos="fade-down" src={github} className="w-16 p-4" alt="" />
      </a>
      <a href={url_instagram}>
        <img data-aos="fade-left" src={instagram} className="w-16 p-4" alt="" />
      </a>
      <a href={url_linkedin}>
        <img
          data-aos="fade-left"
          src={linkedin}
          className="w-16 p-4 lg:mb-3"
          alt=""
        />
      </a>
      <hr
        data-aos="fade-up"
        className="h-36 mx-7 hidden sm:block bg-choco w-1 items-center"
      />
    </div>
  );
};

export default HeroSosmed;
