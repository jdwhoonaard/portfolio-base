import React from "react";
import { motion } from 'framer-motion';

import Grid from "../../components/grid";
import Jumbotron from "../../components/contentful/jumbotron";
import Text from "../../components/contentful/text";
import SEO from "../../components/seo";

import './index.scss'

const ProjectTemplate = ({ pageContext }) => {
  const headerData = {
    url: pageContext.url,
    image: pageContext.image,
    title: pageContext.title,
    subtitle: pageContext.subtitle,
    tags: pageContext.tags,
    date: pageContext.date,
    description: pageContext.description,
    teammembers: pageContext.teammembers,
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
        <Jumbotron data={headerData} />

        {pageContext.contentList.map(item => {
          const type = item.internal.type;
          console.log(item)

          if (type === 'ContentfulContentTextLeft') {
            return <Text render={item} modifier="left" />
          } else if (type === 'ContentfulContentTextRight') {
            return <Text render={item} modifier="right" />
          } else if (type === 'ContentfulContentTextCentered') {
            return <Text render={item} modifier="centered" />
          }
        })}
      </Grid>

      <SEO title={pageContext.title} />
    </motion.div >
  )
}

export default ProjectTemplate