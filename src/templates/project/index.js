import React from "react";
import { motion } from 'framer-motion';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Jumbotron from "../../components/contentful/jumbotron";
import Text from "../../components/contentful/text";
import Quote from "../../components/contentful/quote";
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

      <Jumbotron data={headerData} />

      {pageContext.contentList.map(data => {
        const type = data.internal.type;
        console.log(data)

        if (type === 'ContentfulGenericTextField') {
          return <Text data={data} />
        } else if (type === 'ContentfulQuote') {
          return <Quote data={data} />
        }
      })}

      <SEO title={pageContext.title} />
    </motion.div >
  )
}

export default ProjectTemplate