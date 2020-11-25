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

    const querystring = event.queryStringParameters;
    const queryName = querystring.name;

    console.log(`queryName is ${queryName}`);

    const query = `
    *[ _type == "story" && name == "`+queryName+`" && !(_id in path("drafts.**")) ]{
       name,
       description,
       content,
    } | order(publishedAt desc)
  `
  console.log(`query is ${query}`);
  const params = {}

    return {
        statusCode: 200,
        body: JSON.stringify({message: await client.fetch(query, params)})
    };
}
