import React from "react";
import { Link } from "react-router-dom";
import BadgeTech from "./BadgeTech";

const DetailProject = ({ projects }) => {
  return (
    <div className="w-full mt-5 flex justify-center flex-col">
      <h1 className="text-4xl font-bold my-4">{projects.title}</h1>
      <p className="font-light text-base">{projects.description}</p>
      <div className="flex flex-row my-3">
        {projects.tech.map((sub) => (
          <BadgeTech sub={sub} />
        ))}
      </div>
      <Link to="/">
        <button className="my-5 hover:scale-100 hover:bg-brown/40 flex rounded-sm justify-end text-white px-2 py-2 bg-brown">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default DetailProject;
