import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import React from "react";

const LessonDetail = ({ data }) => {
  console.log(data);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: data.mdx.body }} />
    </>
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
