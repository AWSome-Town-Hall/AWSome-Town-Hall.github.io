import React from "react";
import { graphql, navigate } from "gatsby";

// Components
import Header from "../components/blocks/header";

// Icons
import BackIcon from "../assets/icons/back.svg";

// Styles
import "./styles.scss";

const LessonDetail = ({ data }) => {
  const { lesson } = data.mdx.frontmatter;

  return (
    <main>
      <Header />
      <section className="lesson-detail">
        <div className="lesson-back-icon" onClick={() => navigate(-1)}>
          <img src={BackIcon} alt="Go back!" />
        </div>
        <div className="lesson-card">
          <div className="l-card-header">{lesson}</div>
          <div className="l-card-body">
            <div dangerouslySetInnerHTML={{ __html: data.mdx.body }} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default LessonDetail;

export const query = graphql`
  query LessonsBySlug($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        lesson
        published
      }
    }
  }
`;
