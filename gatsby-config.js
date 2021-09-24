module.exports = {
  siteMetadata: {
    siteUrl: "https://www.gabiscaro.com",
    title: "gabiscaro",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `dominantColor`,
          quality: 100,
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@styles": "src/styles",
        },
        extensions: []
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-3HFE4PBT65",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `rubik\:400,500,600,800`,
        ],
        display: 'swap'
      }
    }
  ],
};
