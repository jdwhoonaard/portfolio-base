const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`./src/templates/project/index.js`)

  return graphql(`
    query pageQueries {
      allContentfulTemplateProject {
        edges {
          node {
            id
            url
          }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }
    // console.log(result.data.allContentfulTemplateProject.edges, null, 4)
    result.data.allContentfulTemplateProject.edges.map(({ node }) => createPage({
      path: `${node.url}`,
      component: projectTemplate,
      context: {
        id: node.id,
      }
    }))
  });
}