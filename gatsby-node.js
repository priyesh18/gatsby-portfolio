/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const fetch = require(`node-fetch`)

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data from GitHub API at build time
  const result = await fetch(`https://api.github.com/users/priyesh18/repos`)
  const resultData = await result.json()
  // create node for build time data example in the docs
  createNode({
    // nameWithOwner and url are arbitrary fields from the data
    repos: resultData,

    // required fields
    id: `github`,
    parent: null,
    children: [],
    internal: {
      type: `github`,
      contentDigest: createContentDigest(resultData),
    },
  })
}