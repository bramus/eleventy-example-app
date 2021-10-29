require("dotenv").config();
const ErrorOverlay = require('eleventy-plugin-error-overlay');
const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
  // https://www.11ty.dev/docs/layouts/#layout-aliasing
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');

  // https://www.11ty.dev/docs/copy/
  eleventyConfig.addPassthroughCopy("src/css");

  // https://11ty.rocks/eleventyjs/content/
  eleventyConfig.addFilter("excerpt", (post) => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
  });

  // Plugins
  eleventyConfig.addPlugin(ErrorOverlay);

  // Transforms
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath && outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: "src",
    },
  };
};