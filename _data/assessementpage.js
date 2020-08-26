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
    *[ _type == "assessementpage" && !(_id in path("drafts.**")) ]{
       mainContent
    } | order(publishedAt desc)
  `
  const params = {}
  
  return await client.fetch(query, params)
}