import React from "react";
import github from "../Components/icon/github.svg";
import instagram from "../Components/icon/instagram.svg";
import linkedin from "../Components/icon/linkedin.svg";
import map from "../Components/icon/map-marker-alt.svg";

const Footer = () => {
  const url_linkedin = "https://www.linkedin.com/in/suniarsih-eka-pratiwi";
  const url_github = "https://github.com/Ekapratiwi9";
  const url_instagram = "https://www.instagram.com/pratiwi.eka29/";
  return (
    <div className="bg-brown">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 py-6 lg:py-3 justify-between px-20">
        <div className="flex gap-3 justify-center items-center">
          <img src={map} className="w-3 text-center" alt="" />
          <p className="font-semibold hover:font-extrabold cursor-pointer">
            Sumenep, Jawa Timur
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <a href={url_github}>
            <img
              src={github}
              className="w-14 p-4 hover:-translate-y-2"
              alt=""
            />
          </a>
          <a href={url_instagram}>
            <img
              src={instagram}
              className="w-14 p-4 hover:-translate-y-2"
              alt=""
            />
          </a>
          <a href={url_linkedin}>
            <img
              src={linkedin}
              className="w-14 p-4 hover:-translate-y-2"
              alt=""
            />
          </a>
        </div>
      </div>
      <hr className="bg-choco" />
      <div className="flex justify-center items-center p-5">
        Copyright @ 2023, All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
