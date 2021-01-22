---
layout: layout-resources.njk
country: turkey
---
<h1>{{ learningresourcepage[0].title.tr }}</h1>
{{ learningresourcepage[0].mainContent.tr | sanityToHTML | safe }}
