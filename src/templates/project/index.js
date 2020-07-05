import React from "react";
import { graphql } from 'gatsby'
import { motion } from 'framer-motion';
import Jumbotron from "../../components/contentful/jumbotron";
import Text from "../../components/contentful/text";
import ImageGroup from "../../components/contentful/imageGroup";
import FloatingImageGroup from "../../components/contentful/floatingImageGroup";
import Video from "../../components/contentful/video"
import SEO from "../../components/seo";

const ProjectTemplate = ({ data: { contentfulTemplateProject } }) => {
  const pageData = contentfulTemplateProject;

  const headerData = {
    image: pageData.image,
    title: pageData.title,
    subtitle: pageData.subtitle,
    textColor: pageData.textColor,
    backgroundColor: pageData.backgroundColor,
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
      <div className="container container--fluid article">
        <Jumbotron data={headerData} cover={pageData.image.fluid} />
        {pageData.contentList.map(item => {
          console.log(item)
          const type = item.__typename;

          if (type === 'ContentfulContentTextLeft') {
            return <Text key={item.id} render={item} modifier="left" />
          } else if (type === 'ContentfulContentTextRight') {
            return <Text key={item.id} render={item} modifier="right" />
          } else if (type === 'ContentfulContentTextCentered') {
            return <Text key={item.id} render={item} modifier="centered" />
          } else if (type === 'ContentfulContentImagegroup') {
            return <ImageGroup key={item.id} render={item} />
          } else if (type === 'ContentfulContentImagegroupFloating') {
            return <FloatingImageGroup key={item.id} render={item} />
          } else if (type === 'ContentfulContentVideo') {
            return <Video key={item.src} src={item.src} />
          } else return null;
        })}
      </div>
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
      textColor
      backgroundColor
      tags
      headerColor
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
          video
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
        ... on ContentfulContentImagegroup {
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
        ... on ContentfulContentImagegroupFloating {
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
        ... on ContentfulContentVideo {
          id
          internal {
            type
          }
          src
        }
      }
    }
  }
`

export default ProjectTemplate