---
layout: layout-about.njk
country: turkey
---

<h1>{{ aboutpages[0].title.tr }}</h1>
{{ aboutpages[0].mainContent.tr | sanityToHTML | safe }}