/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `AWSome Townhall`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "courses",
        path: "./src/markdown/courses/",
      },
      __key: "courses",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "lessons",
        path: "./src/markdown/lessons/",
      },
      __key: "lessons",
    },
  ],
};
