const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`./src/templates/project/index.js`)

  return graphql(`
    query pageQueries {
      allContentfulTemplateProject {
        nodes {
          url
          image {
            sizes(maxWidth: 640) {
              src
              srcSet
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
            ... on ContentfulContentTextCentered {
              internal {
                type
              }
              body {
                json
              }
            }
            ... on ContentfulContentTextLeft {
              internal {
                type
              }
              body {
                json
              }
              image {
                id
                sizes(maxWidth: 1280) {
                  src
                  srcSet
                }
              }
            }
            ... on ContentfulContentTextRight {
              internal {
                type
              }
              body {
                json
              }
              image {
                id
                sizes(maxWidth: 1280) {
                  src
                  srcSet
                }
              }
            }
            ... on ContentfulContentImageGroup {
              internal {
                type
              }
              images {
                id
                sizes(maxWidth: 1280) {
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }
    // console.log(result.data.allContentfulTemplateProject.nodes, null, 4)
    result.data.allContentfulTemplateProject.nodes.map(node => createPage({
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