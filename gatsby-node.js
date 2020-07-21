const fetch = require(`node-fetch`)
const { github_repos_url } = require(`./src/data/personal.json`)
const NODE_TYPE = `project`
exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
  createNodeId,
}) => {
  // get data from GitHub API at build time
  const result = await fetch(github_repos_url)
  const data = await result.json()
  data.forEach(post =>
    createNode({
      ...post,
      id: createNodeId(`${NODE_TYPE}-${post.id}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        content: JSON.stringify(post),
        contentDigest: createContentDigest(post),
      },
    })
  )
  return
}
