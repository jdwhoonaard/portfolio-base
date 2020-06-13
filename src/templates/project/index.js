import React from "react";
import { motion } from 'framer-motion';

import ProjectHeader from "../../components/projectHeader";
import SEO from "../../components/seo";

const ProjectTemplate = ({ pageContext }) => {

  const headerData = {
    main: {
      title: pageContext.title,
      subtitle: 'A cool looking phone',
      image: pageContext.coverImage.fixed.srcWebp,
      tags: pageContext.tags,
      client: 'Avans Hogeschool',
      year: '2018'
    },
    sub: {
      introduction: pageContext.introduction,
      teammembers: ['jan', 'piet']
    }
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

      <ProjectHeader main={headerData.main} sub={headerData.sub} />

      <SEO title={pageContext.title} />
    </motion.div >
  )
}

export default ProjectTemplate