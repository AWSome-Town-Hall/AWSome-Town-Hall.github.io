import React from "react";

// Components
import TimelineBlock from "./timelineBlock";

// Mocks
import aws_roadmap from "../../../mocks/roadmap";

// Styles
import "./styles.scss";

const Timeline = () => {
  return (
    <div className="timeline-wrapper">
      {aws_roadmap.map((step, index) => (
        <TimelineBlock title={step.title} no={index} content={step.content} />
      ))}
    </div>
  );
};

export default Timeline;
