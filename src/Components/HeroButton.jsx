import React from "react";
import file from "../Components/icon/file-regular.svg";
import mail from "../Components/icon/envelope-regular.svg";

const HeroButton = () => {
  const url =
    "https://drive.google.com/file/d/1L3uF1oQPP892JpT6XQh0TYLyIDShCJMm/view?usp=sharing";

  const emailAddress = "ekapratiwi883@gmail.com"; // Gantilah dengan alamat email yang ingin Anda tuju
  const subject = "Hi"; // Gantilah dengan subjek pesan yang ingin Anda tetapkan
  const body = "Your Message..."; // Gantilah dengan isi pesan yang ingin Anda isi

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const handleClick = () => {
    window.location.href = mailtoLink;
  };

  return (
    <div className="lg:mt-5 flex flex-col">
      <a
        href={url}
        className="flex group flex-row justify-center items-center lg:justify-start lg:px-40"
      >
        <img src={file} className="w-10 p-3" alt="" />
        <span className="group-hover:underline">Download My CV</span>
      </a>
      <button
        onClick={handleClick}
        className="flex flex-row group justify-center items-center lg:justify-start lg:px-40"
      >
        <img src={mail} className="w-10 p-3" alt="" />
        <span className="group-hover:underline">Chat With Me</span>
      </button>
    </div>
  );
};

export default HeroButton;
