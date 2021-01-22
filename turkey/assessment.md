---
layout: layout.njk
country: turkey
---

<h1>{{ assessmentpage[0].title.tr }}</h1>
{{ assessmentpage[0].mainContent.tr | sanityToHTML | safe }}