const sanityClient = require('@sanity/client')
const projectId = "3vgpwmyb"
const apiToken = ''
const client = sanityClient({
  projectId,
  dataset: 'production',
  token: '',
  useCdn: false
})

exports.handler = async function(event, context) {

    const query = `
    *[ _type == "story" && !(_id in path("drafts.**")) ]{
       name,
       description,
       content,
    } | order(publishedAt desc)
  `
  const params = {}

    return {
        statusCode: 200,
        body: JSON.stringify({message: client.fetch(query, params)})
    };
}
