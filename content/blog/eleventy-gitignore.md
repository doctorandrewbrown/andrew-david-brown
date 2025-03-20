---
title: Eleventy .gitignore File
tags: eleventy
date: 2025-02-04
---
This .gitignore file was taken from [here](https://github.com/11ty/eleventy-base-blog) 

```bash
# .gitignore file
_site/
node_modules/
package-lock.json
.cache
```
Something that could also go in this file would be the Decap CMS ```config.yml``` file because different configurations (i.e. different versions of the file) are used for running the cms locally or deployed via Netlify.
