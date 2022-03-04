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
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          "@src": "src",
          "@components": "src/components",
          "@styles": "src/styles",
          "@images": "src/images",
          "@videos": "src/videos",
          "@hooks": "src/hooks",
          "@utils": "src/utils",
          "TweenLite": "node_modules/gsap/src/uncompressed/TweenLite.js",
          "TweenMax": "node_modules/gsap/src/uncompressed/TweenMax.js",
          "TimelineLite": "node_modules/gsap/src/uncompressed/TimelineLite.js",
          "TimelineMax": "gsap/TimelineMax",
          ScrollMagic:
            "node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js",
          "animation.gsap":
            "node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js",
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-alias-imports`,
    //   options: {
    //     alias: {

    //     },
    //     extensions: [],
    //   },
    // },
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
        fonts: [`rubik\:400,500,600,800`],
        display: "swap",
      },
    },
    // {
    //   resolve: "gatsby-plugin-transition-link",
    //   options: {
    //     layout: require.resolve(`./src/components/Layout.jsx`),
    //   },
    // },
  ],
};
