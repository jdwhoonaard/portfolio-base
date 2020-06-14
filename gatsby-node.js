const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`./src/templates/project/index.js`)

  return graphql(`
    query pageQueries {
      allContentfulTemplatePage1 {
        nodes {
          url
          image {
            file {
              url
            }
          }
          title
          subtitle
          tags
          createdAt
          description {
            json
          }
          teammembers {
            fullName
          }
          contentList {
            ... on ContentfulGenericTextField {
              internal {
                type
              }
              body {
                json
              }
              images {
                file {
                  url
                }
              }
            }
            ... on ContentfulImageCarousel {
              internal {
                type
              }
              images {
                file {
                  url
                }
              }
            }
            ... on ContentfulQuote {
              internal {
                type
              }
              quote {
                json
              }
              source
            }
          }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }
    // console.log(JSON.stringify(result.data.allContentfulTemplatePage1.nodes, null, 4))
    console.log(result.data.allContentfulTemplatePage1.nodes, null, 4)
    result.data.allContentfulTemplatePage1.nodes.map(node => createPage({
      path: `${node.url}`,
      component: projectTemplate,
      context: {
        url: node.url,
        image: node.image,
        title: node.title,
        subtitle: node.subtitle,
        tags: node.tags,
        date: node.createdAt,
        description: node.description,
        teammembers: node.teammembers,
        contentList: [...node.contentList]
      }
    }))
  });
}