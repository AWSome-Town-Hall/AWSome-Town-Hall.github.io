import React, { useState } from "react";

// Components
import CourseCard from "../../elements/courseCard";
import Modal from "../../blocks/modal";

// Styles
import "./styles.scss";

const CoursesSection = ({ courses, lessons }) => {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState("");

  const courseSelection = (selectedCourse) => {
    const allLessons = lessons.filter(
      (lesson) => lesson.frontmatter.course_name === selectedCourse
    );

    setSelectedCourse(allLessons);
    setSelectedCourseTitle(selectedCourse);
  };

  return (
    <>
      {selectedCourse?.length > 0 && (
        <Modal data={selectedCourse} title={selectedCourseTitle} closeModal={() => {
          setSelectedCourse([]);
          setSelectedCourseTitle("");
        }} />
      )}
      <section className="courses-wrapper" id="courses">
        <h2 className="coursesSection_heading">Courses</h2>

        <p className="coursesSection_subHeading">
          Get the best resources to learn AWS!
        </p>

        <section className="all-courses">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              className="course-item"
              title={course.frontmatter.course}
              onClick={() => courseSelection(course.frontmatter.course)}
              difficulty={course.frontmatter.difficulty_level}
              footerText="Footer text"
            />
          ))}
        </section>
      </section>
    </>
  );
};

export default CoursesSection;
