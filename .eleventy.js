const blocksToHtml = require('@sanity/block-content-to-html')


module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images/");
    eleventyConfig.addPassthroughCopy("css/");
    eleventyConfig.addPassthroughCopy("documents/");


    eleventyConfig.addFilter('localeContent', function(values,key)
    {
      return values;
    })

    eleventyConfig.addFilter('sanityToHTML', function(value) {
      return blocksToHtml({
        blocks: value,
      })
    })
    return {
      templateFormats: [
        "md",
        "njk",
        "html",
        "liquid"
      ],
  
      // If your site lives in a different subdirectory, change this.
      // Leading or trailing slashes are all normalized away, so don’t worry about it.
      // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
      // This is only used for URLs (it does not affect your file structure)
      pathPrefix: "/",
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
      passthroughFileCopy: true,
      dir: {
        input: ".",
        includes: "_includes",
        data: "_data",
        output: "_site"
      }
    };  
  };