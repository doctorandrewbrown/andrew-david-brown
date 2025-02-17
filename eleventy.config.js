// define constants used below in this module
// Prism syntax highlighter
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// Luxon date format plugin
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
	// Input directory: src;
	// Output directory: _site
	
	// Prism highlighter
    eleventyConfig.addPlugin(syntaxHighlight);

	// copy static directories to _site dir
	eleventyConfig.addPassthroughCopy("static");
	//eleventyConfig.addPassthroughCopy("scripts");

	// copy decap cms files to _site dir
	eleventyConfig.addPassthroughCopy("admin");

	// keep footer date current
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

	// Luxon format date set in frontmatter
	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	  });
	
};
// Define input and output directories
module.exports.config = {
	dir: {
	  input: "content",
	  //output: "_site"
	}
  };