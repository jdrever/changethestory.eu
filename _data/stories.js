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
       "storyId" : _id,
       name,
       who_created,
       how_created,
       country,
       tags,
       "mainImageUrl": mainImage.asset->url,
       content,
    } | order(publishedAt desc)
  `
  const params = {}
  
  return await client.fetch(query, params)
}