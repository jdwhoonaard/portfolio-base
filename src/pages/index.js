import React from "react"
import { Link, graphql } from "gatsby"
import { motion } from 'framer-motion';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types';

import SEO from "../components/seo"
import Card from "../components/card"

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: () => {
      return null;
    },
  },
};

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
      <div className="container container--menuSpacer">
        <div className="container__row">
          <div className="
            container__col--bottomMargin
            container__col-xs-4
            container__col-sm-8
            container__col-md-8
            container__col-lg-12
          " >
            {documentToReactComponents(data.contentfulPageIndex.body.json, options)}
          </div>
        </div>

        <div className="container__row">
          {data.contentfulPageIndex.cards.map((card) => {

            if (card.internal.type === 'ContentfulPageAbout') {
              return (
                <div key="aboutme" className="
                  container__col--dancing
                  container__col-xs-4
                  container__col-sm-4
                  container__col-md-4
                  container__col-lg-3
                  container__col-xl-3
                " >
                  <Link to={`/about/`}>
                    <Card data={card} />
                  </Link>
                </div>
              )
            } else if (card.internal.type === 'ContentfulTemplateProject') {
              return (
                <div key={card.url} className="
                  container__col--dancing
                  container__col-xs-4
                  container__col-sm-4
                  container__col-md-4
                  container__col-lg-3
                  container__col-xl-3
                " >
                  <Link to={`/${card.url}/`}>
                    <Card data={card} />
                  </Link>
                </div>
              )
            } else return null;
          })}
        </div>
      </div>
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
            fluid(maxWidth: 320) {
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
          textColor
          backgroundColor
          tags
          image {
            fluid(maxWidth: 320) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

export default IndexPage
