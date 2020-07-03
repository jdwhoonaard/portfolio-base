import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { motion } from 'framer-motion'

import SEO from "../components/seo"

const AboutPage = ({ data: { contentfulPageAbout } }) => {
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
      <div className="container container--menuSpacer">
        <div className="container__row">
          <div className="
            container__col-xs-4
            container__col-sm-6
            container__col-sm-offset-1
            container__col-md-6
            container__col-md-offset-1
            container__col-lg-6
          ">
            <Img fluid={contentfulPageAbout.profileImage.fluid} />
          </div>
          <div className="
            type__extraSpace
            container__col-xs-4
            container__col-sm-6
            container__col-sm-offset-1
            container__col-md-6
            container__col-md-offset-1
            container__col-lg-6
          ">
            {documentToReactComponents(contentfulPageAbout.description.json)}
          </div>
        </div>
      </div>
      <SEO title="about me" />
    </motion.div>
  )
}

export const query = graphql`
  query aboutQuery {
    contentfulPageAbout {
      profileImage {
        fluid(maxWidth: 640) {
          ...GatsbyContentfulFluid
        }
      }
      description {
        json
      }
      profile {
        fullName
        specialisation
      }
    }
  }
`;


export default AboutPage
