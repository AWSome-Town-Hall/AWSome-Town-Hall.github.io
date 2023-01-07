import React from "react";

// Images
import DefaultImage from "../../../assets/images/course-default.jpeg";

// Styles
import "./styles.scss";

const CourseCard = ({ title, difficulty, onClick, className }) => {
  return (
    <div onClick={() => onClick()} className={`course-card ${className}`}>
      <img src={DefaultImage} alt={title} width="100%" />
      <div className="course-cardBody">
        <h3 className="course-title">{title}</h3>
        <p className="course-difficulty-lvl">Difficulty level: {difficulty}</p>
      </div>
    </div>
  );
};

export default CourseCard;
