import * as React from "react";
import { graphql } from "gatsby";

// Components
import { Header, HeroSection, CoursesSection } from "../components";

// Styles
import "../styles/main.scss";

const IndexPage = ({ data }) => {
  return (
    <main>
      <Header />
      <HeroSection />
      <CoursesSection
        courses={data.courses.nodes}
        lessons={data.lessons.nodes}
      />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>AWSome Townhall</title>;

export const pageQuery = graphql`
  query courseOverviewQuery {
    # To fetch all courses
    courses: allMdx(
      filter: { frontmatter: { type: { eq: "course" } } }
      sort: { frontmatter: { order: ASC } }
    ) {
      nodes {
        frontmatter {
          course
          slug
          difficulty_level
        }
      }
    }

    # To fetch all lessons
    lessons: allMdx(
      filter: { frontmatter: { type: { eq: "lesson" } } }
      sort: { frontmatter: { order: ASC } }
    ) {
      nodes {
        frontmatter {
          course_name
          lesson
          slug
        }
      }
    }
  }
`;
