import React from "react";
import { graphql } from 'gatsby'
import { motion } from 'framer-motion';

import Grid from "../../components/grid";
import Jumbotron from "../../components/contentful/jumbotron";
import Text from "../../components/contentful/text";
import SEO from "../../components/seo";

import './index.scss'

const ProjectTemplate = ({ data: { contentfulTemplateProject } }) => {
  const pageData = contentfulTemplateProject;

  const headerData = {
    image: pageData.image,
    title: pageData.title,
    subtitle: pageData.subtitle,
    tags: pageData.tags,
    date: pageData.createdAt,
    description: pageData.description,
    teammembers: pageData.teammembers,
  }

  return (
    <motion.div
      key="wrapper"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.1
          }
        }
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >

      <Grid className="fixed header__spacer">
        <Jumbotron data={headerData} cover={pageData.image.fluid} />

        {pageData.contentList.map(item => {
          const type = item.internal.type;

          if (type === 'ContentfulContentTextLeft') {
            return <Text key={item.id} render={item} modifier="left" />
          } else if (type === 'ContentfulContentTextRight') {
            return <Text key={item.id} render={item} modifier="right" />
          } else if (type === 'ContentfulContentTextCentered') {
            return <Text key={item.id} render={item} modifier="centered" />
          } else return null;
        })}
      </Grid>

      <SEO title={pageData.title} />
    </motion.div >
  )
}

export const query = graphql`
  query pageQuery($id: String) {
    contentfulTemplateProject(id: {eq: $id}) {
      id
      title
      subtitle
      image {
        fluid(maxWidth: 640) {
          ...GatsbyContentfulFluid
        }
      }
      tags
      description {
        json
      }
      teammembers {
        fullName
      }
      contentList {
        ... on ContentfulContentTextCentered {
          id
          internal {
            type
          }
          body {
            json
          }
        }
        ... on ContentfulContentTextLeft {
          id
          internal {
            type
          }
          body {
            json
          }
          image {
            fluid(maxWidth: 960){
              ...GatsbyContentfulFluid
            }
          }
        }
        ... on ContentfulContentTextRight {
          id
          internal {
            type
          }
          body {
            json
          }
          image {
            fluid(maxWidth: 960){
              ...GatsbyContentfulFluid
            }
          }
        }
        ... on ContentfulContentImageGroup {
          id
          internal {
            type
          }
          images {
            fluid(maxWidth: 960){
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default ProjectTemplate