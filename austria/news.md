---
layout: layout.njk
country: austria
---

<h1>{{ newspage[0].title.de }}</h1>
{{ newspage[0].mainContent.de | sanityToHTML | safe }}