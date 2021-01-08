---
layout: layout-about.njk
country: hungary
---

<h1>{{ aboutpages[0].title.hu }}</h1>
{{ aboutpages[0].mainContent.hu | sanityToHTML | safe }}