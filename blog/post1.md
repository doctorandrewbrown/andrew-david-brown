---
title: Post Lorem ipsum
tags: eleventy, stuff, html
date: 2020-01-01
---
This is post 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officia ab iusto esse animi quasi 
commodi voluptatum eveniet, magni minima, aut perspiciatis. Beatae, et natus ducimus illo nesciunt itaque illum?

```javascript
const syntaxHighlight = 
  require(
          "@11ty/eleventy-plugin-syntaxhighlight");

module.exports = 
  function (eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("scripts");
};
```