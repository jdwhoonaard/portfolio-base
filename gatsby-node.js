const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`./src/templates/project/index.js`)

  return graphql(`
    query {
      allContentfulPortfolioItem {
        edges {
          node {
            url
            coverImage {
              fixed(width: 640) {
                srcWebp
              }
            }
            title
            tags
            date
            introduction {
              json
            }
            goal {
              json
            }
            endProduct {
              id
              fixed(width: 1024) {
                srcWebp
              }
            }
            research {
              json
            }
            researchAssets {
              id
              fixed(width: 1024) {
                srcWebp
              }
            }
            concepting {
              json
            }
            conceptingAssets {
              id
              fixed(width: 1024) {
                srcWebp
              }
            }
            conclusion {
              json
            }
          }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allContentfulPortfolioItem.edges.map(edge => {
      createPage({
        path: `${edge.node.url}`,
        component: projectTemplate,
        context: {
          coverImage: edge.node.coverImage,
          title: edge.node.title,
          tags: edge.node.tags,
          date: edge.node.date,
          introduction: edge.node.introduction,
          goal: edge.node.goal,
          endProduct: edge.node.endProduct,
          research: edge.node.research,
          researchAssets: edge.node.researchAssets,
          concepting: edge.node.concepting,
          conceptingAssets: edge.node.conceptingAssets,
          conclusion: edge.node.conclusion
        }
      })
    })
  });
}