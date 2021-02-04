---
layout: layout-resources.njk
country: italy
---
<h1>{{ learningresourcepage[0].title.it }}</h1>
{{ learningresourcepage[0].mainContent.it | sanityToHTML | safe }}
