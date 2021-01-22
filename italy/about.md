---
layout: layout-about.njk
country: italy
---

<h1>{{ aboutpages[0].title.it }}</h1>
{{ aboutpages[0].mainContent.it | sanityToHTML | safe }}