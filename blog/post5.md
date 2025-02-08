---
title: Post 4
date: Last Modified
tags: html
---

Post2 this is post 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officia ab iusto esse animi quasi
commodi voluptatum eveniet, magni minima, aut perspiciatis. Beatae, et natus ducimus illo nesciunt itaque illum?

```twig
{%- raw -%}
{% include "_includes/head.njk" %}
{% include "_includes/header.njk" %}
{{date}}
<main class="container">
    {# either render content of .md ie posts files if needed #}
    {{ content | safe }}
    {# or include html for regular pages (not both) #}
    {%- block main -%}{%- endblock -%}
</main>
{% include "_includes/footer.njk" %}
{% endraw %}
```
Post2 this is post 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officia ab iusto esse animi quasi
commodi voluptatum eveniet, magni minima, aut perspiciatis. Beatae, et natus ducimus illo nesciunt itaque illum?