import React, { useEffect } from "react";
import BadgeTech from "../Components/BadgeTech";
import Project from "../Data/Project";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams, Link } from "react-router-dom";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="h-auto mb-5">
      <h1 className="text-center text-6xl text-choco font-extrabold">
        My Personal Website
      </h1>
      <div className="px-28 mt-10">
        {Project.map((data) => (
          <div className="scroll-element flex flex-col lg:flex-row justify-center lg:gap-32 my-14 items-center">
            <div
              data-aos="fade-right"
              className="lg:w-[30rem] w-80 h-64 border-2 border-choco rounded-md bg-brown"
            >
              <img
                src={data.image[0].img}
                className="h-full w-full object-fill"
                alt=""
              />
            </div>
            <div
              data-aos="fade-left"
              className="bg-white lg:w-[30rem] w-80 p-5"
            >
              <Link to={`/project/${data.slug}`}>
                <h1 className="text-4xl font-bold">{data.title}</h1>
              </Link>
              <p className="text-gray py-3">{data.description}</p>
              {data.tech.map((sub, index) => (
                <BadgeTech key={index} sub={sub} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
