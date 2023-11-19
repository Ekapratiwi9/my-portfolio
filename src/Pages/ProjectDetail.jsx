import React from "react";
import { useParams } from "react-router-dom";
import Project from "../Data/Project";
import ProjectSlider from "../Components/ProjectSlider";
import DetailProject from "../Components/DetailProject";
import Footer from "../Components/Footer";

const ProjectDetail = () => {
  const { slug } = useParams();
  const projects = Project.find((e) => e.slug === String(slug));
  return (
    <>
      <div className="h-auto flex items-center justify-center">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row  gap-5 rounded-xl mt-12 mb-16 mx-8 bg-brown/25 backdrop-blur-sm">
            <ProjectSlider projects={projects} />
            <DetailProject projects={projects} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;
