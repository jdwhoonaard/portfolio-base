import React from "react"
import { Link, graphql } from "gatsby"
import { motion } from 'framer-motion';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import SEO from "../components/seo"
import Grid from "../components/grid"
import Card from "../components/card"

const IndexPage = ({ data }) => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.25
          }
        }
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <SEO title="Home" />
      <Grid className="fixed header__spacer">
        <div className="grid__row">
          <div className="sm-4 md-8 lg-12 xl-12">
            {documentToReactComponents(data.contentfulPageIndex.body.json)}
          </div>
        </div>

        <div className="grid__row dancing__cards">
          {data.contentfulPageIndex.cards.map((card) => {

            if (card.internal.type === 'ContentfulPageAbout') {
              return (
                <div key={card.url} className="gridCard__outer sm-4 md-4 lg-3 xl-3">
                  <Link to={`/about/`}>
                    <Card data={{
                      title: 'About me'
                    }} />
                  </Link>
                </div>
              )
            } else if (card.internal.type === 'ContentfulTemplateProject') {
              return (
                <div key={card.url} className="gridCard__outer sm-4 md-4 lg-3 xl-3">
                  <Link to={`/${card.url}/`}>
                    <Card data={card} />
                  </Link>
                </div>
              )
            } else return null;
          })}
        </div>
      </Grid>
    </motion.div >
  )
}

export const query = graphql`
  query indexQuery {
    contentfulPageIndex {
      id
      body {
        json
      }
      cards {
        ... on ContentfulPageAbout {
          id
          internal {
            type
          }
          profileImage {
            fluid(maxWidth: 640) {
              ...GatsbyContentfulFluid
            }
          }
        }
        ... on ContentfulTemplateProject {
          id
          internal {
            type
          }
          url
          title
          subtitle
          tags
          image {
            fluid(maxWidth: 640) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

export default IndexPage
