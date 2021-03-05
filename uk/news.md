---
layout: layout-contact.njk
country: uk
---
<h1>{{ newspage[0].title.en }}</h1>
{{ newspage[0].mainContent.en | sanityToHTML | safe }}

<ul>
{%- for story in UKnewsstories -%}
  <li><a href="{{ story.title | slug }}">{{ story.title }}</a></li>
{%- endfor -%}
</ul>