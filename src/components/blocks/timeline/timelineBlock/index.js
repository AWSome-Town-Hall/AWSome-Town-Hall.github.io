import React from "react";

// Styles
import "./styles.scss";

const TimelineBlock = ({ no, title, content }) => {
  return (
    <div className="timelineBlock">
      <div className="timelineBlock_stepno">
        <p className="timelineBlock_stepno_text">{no}</p>
      </div>
      <h3 className="timelineBlock_heading">{title}</h3>
      <p className="timelineBlock_description">{content}</p>
    </div>
  );
};

export default TimelineBlock;
