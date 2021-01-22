---
layout: layout.njk
country: italy
---

<h1>{{ assessmentpage[0].title.it }}</h1>
{{ assessmentpage[0].mainContent.it | sanityToHTML | safe }}