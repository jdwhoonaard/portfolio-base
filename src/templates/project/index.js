import React from "react";
import { motion } from 'framer-motion';
import './index.scss';

import SEO from "../../components/seo";

import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: children => <p>{children}</p>,
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => (
      node.data.target.fields
        ? <img key={node.data.target.fields.file['en-US'].url} alt='Project content' src={node.data.target.fields.file['en-US'].url} style={{ maxWidth: '100%' }} />
        : <i>No image available</i>
    )
  }
};

const container = {
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
};

const ProjectTemplate = ({ pageContext }) => {
  console.log(pageContext)
  return (
    <motion.div
      key="wrapper"
      variants={container}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <img className="project__header__icon" alt="cover" src={pageContext.coverImage.fixed.srcWebp} />
      <h1>{pageContext.title}</h1>
      {pageContext.tags !== null ? (
        <ul>{pageContext.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      ) : null}

      {pageContext.introduction !== null ? (
        <div className="textWrapper">{documentToReactComponents(pageContext.introduction.json, options)}</div>
      ) : null}

      {pageContext.endProduct !== null ? (
        <div>{pageContext.endProduct.map(image => (
          <img alt="End product" key={image.id} src={image.fixed.srcWebp} />
        ))}</div>
      ) : null}

      {pageContext.goal !== null ? (
        <div className="textWrapper">{documentToReactComponents(pageContext.goal.json, options)}</div>
      ) : null}

      {pageContext.research !== null ? (
        <div className="textWrapper">{documentToReactComponents(pageContext.research.json, options)}</div>
      ) : null}

      {pageContext.researchAssets !== null ? (
        <div>{pageContext.researchAssets.map(image => (
          <img alt="End product" key={image.id} src={image.fixed.srcWebp} />
        ))}</div>
      ) : null}

      {pageContext.concepting !== null ? (
        <div className="textWrapper">{documentToReactComponents(pageContext.concepting.json, options)}</div>
      ) : null}

      {pageContext.conceptingAssets !== null ? (
        <div>{pageContext.conceptingAssets.map(image => (
          <img alt="End product" key={image.id} src={image.fixed.srcWebp} />
        ))}</div>
      ) : null}

      {pageContext.conclusion !== null ? (
        <div className="textWrapper">{documentToReactComponents(pageContext.conclusion.json, options)}</div>
      ) : null}

      <SEO title={pageContext.title} />
    </motion.div >
  )
}

export default ProjectTemplate