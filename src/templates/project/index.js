import React from "react";
import { motion } from 'framer-motion';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import ProjectHeader from "../../components/projectHeader";
import ProjectText from "../../components/projectText";
import ProjectQuote from "../../components/projectQuote";
import SEO from "../../components/seo";

import './index.scss'

const ProjectTemplate = ({ pageContext }) => {
  console.log(pageContext)

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

      <ProjectHeader data={headerData} />

      {pageContext.contentList.map(data => {
        const type = data.internal.type;
        console.log(data)

        if (type === 'ContentfulGenericTextField') {
          return <ProjectText data={data} />
        } else if (type === 'ContentfulQuote') {
          return <ProjectQuote data={data} />
        }
      })}

      <SEO title={pageContext.title} />
    </motion.div >
  )
}

export default ProjectTemplate