const sanityClient = require('@sanity/client')
const projectId = "3vgpwmyb"
const apiToken = ''
const client = sanityClient({
  projectId,
  dataset: 'production',
  token: '',
  useCdn: false
})


module.exports = async function () {
  const query = `
    *[ _type == "story" && !(_id in path("drafts.**")) ]{
       name,
       who_created,
       how_created,
       "mainImageUrl": mainImage.asset->url,
       content,
    } | order(publishedAt desc)
  `
  const params = {}
  
  return await client.fetch(query, params)
}