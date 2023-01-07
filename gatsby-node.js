const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Lessons {
      allMdx(filter: { frontmatter: { type: { eq: "lesson" } } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.allMdx.nodes.forEach((node) => {
    actions.createPage({
      path: node.frontmatter.slug,
      component: path.resolve("./src/templates/lessonDetail.js"),
      context: { slug: node.frontmatter.slug },
    });
  });
};
