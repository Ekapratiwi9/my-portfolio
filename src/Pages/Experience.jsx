import React from "react";
import ExperienceData from "../Data/ExperienceData";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  let workIcon = { background: "#c3a6a0" };
  return (
    <div className="h-screen lg:flex lg:flex-col lg:items-center lg:justify-center">
      <h1 className="text-center text-6xl text-choco font-extrabold">
        Experience
      </h1>
      <VerticalTimeline>
        {ExperienceData.map((data) => (
          <VerticalTimelineElement
            key={data.key}
            date={data.date}
            dateClassName="date"
            iconStyle={workIcon}
          >
            <h3 className="vertical-timeline-element-title font-bold text-lg">
              {data.title}
            </h3>
            <h4 className="text-brown">{data.company}</h4>
            <p className="font-light">{data.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
