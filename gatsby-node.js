// // TODO: temporary workaround for https://github.com/gatsbyjs/gatsby/issues/31878
// exports.onCreateWebpackConfig = ({
//     actions,
//     plugins,
//     stage,
//     getConfig
//   }) => {
//     // override config only during production JS & CSS build
//     if (stage === 'build-javascript') {
//       // get current webpack config
//       const config = getConfig()
  
//       const options = {
//         minimizerOptions: {
//           preset: [
//             `default`,
//             {
//               svgo: {
//                 full: true,
//                 plugins: [
//                   // potentially destructive plugins removed - see https://github.com/gatsbyjs/gatsby/issues/15629
//                   // use correct config format and remove plugins requiring specific params - see https://github.com/gatsbyjs/gatsby/issues/31619
//                   `removeUselessDefs`,
//                   `cleanupAttrs`,
//                   `cleanupEnableBackground`,
//                   `cleanupIDs`,
//                   `cleanupListOfValues`,
//                   `cleanupNumericValues`,
//                   `collapseGroups`,
//                   `convertColors`,
//                   `convertPathData`,
//                   `convertStyleToAttrs`,
//                   `convertTransform`,
//                   `inlineStyles`,
//                   `mergePaths`,
//                   `minifyStyles`,
//                   `moveElemsAttrsToGroup`,
//                   `moveGroupAttrsToElems`,
//                   `prefixIds`,
//                   `removeAttrs`,
//                   `removeComments`,
//                   `removeDesc`,
//                   `removeDimensions`,
//                   `removeDoctype`,
//                   `removeEditorsNSData`,
//                   `removeEmptyAttrs`,
//                   `removeEmptyContainers`,
//                   `removeEmptyText`,
//                   `removeHiddenElems`,
//                   `removeMetadata`,
//                   `removeNonInheritableGroupAttrs`,
//                   `removeOffCanvasPaths`,
//                   `removeRasterImages`,
//                   `removeScriptElement`,
//                   `removeStyleElement`,
//                   `removeTitle`,
//                   `removeUnknownsAndDefaults`,
//                   `removeUnusedNS`,
//                   `removeUselessStrokeAndFill`,
//                   `removeXMLProcInst`,
//                   `reusePaths`,
//                   `sortAttrs`,
//                 ],
//               },
//             },
//           ],
//         }
//       }
//       // find CSS minimizer
//       const minifyCssIndex = config.optimization.minimizer.findIndex(
//         minimizer => minimizer.constructor.name ===
//           'CssMinimizerPlugin'
//       )
//       // if found, overwrite existing CSS minimizer with the new one
//       if (minifyCssIndex > -1) {
//         config.optimization.minimizer[minifyCssIndex] =
//           plugins.minifyCss(options)
//       }
//       // replace webpack config with the modified object
//       actions.replaceWebpackConfig(config)
//     }
//   };