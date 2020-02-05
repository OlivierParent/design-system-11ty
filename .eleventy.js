module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "css": "assets/css",
    "images": "assets/images"
  });

  return {
    dir: {
      input: "views",
      output: "docs"
    },
    pathPrefix: "/design-system-11ty/"
  };
};