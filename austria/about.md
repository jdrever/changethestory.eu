---
layout: layout-about.njk
country: austria
---

<h1>{{ aboutpages[0].title.de }}</h1>
{{ aboutpages[0].mainContent.de | sanityToHTML | safe }}