---
title: Some eleventy tips and insights
tags: eleventy
date: 2025-03-10
---
## Specifying Nunchucks as the templating engine
```javascript
module.exports.config = {
	...
	htmlTemplateEngine: "njk",
    ...
};
```
The snippet from the ```eleventy.config.js``` file shows how to configure eleventy to use Nunchucks. This allows you to use eleventy layout files with the ```.html``` extension which is really convenient during development with vscode, as you can take advantage of emmet html code completion.

## What is the Nunchucks ```|safe``` filter for?

The Nunchucks templating language automatically "escapes" any ```html``` code when processing markdown files. This means that, unless otherwise instructed, any ```html``` code in content ```.md``` files, will be treated as plain-text and not as html code. So ```<h1>Hello!</h1>``` in a markdown file, would not be rendered as expected in the browser as <span><h1 style="font-style:normal" class="text-light">Hello!</h1></span> but literally as ```<h1>Hello!</h1>```. The ```safe``` filter, used when inserting markdown from a ```.md``` file, into an eleventy layout file, allows any ```html``` in the ```.md``` file to be rendered normally.