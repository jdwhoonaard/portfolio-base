import React from "react"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { motion } from 'framer-motion'

import SEO from "../components/seo"
import Grid from "../components/grid"

const SecondPage = ({ data: { contentfulPageAbout } }) => {
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

        <div className="grid__row">
          <div className="sm-4 md-4 lg-6 xl-5">
            <Img fluid={contentfulPageAbout.profileImage.fluid} />
          </div>
          <div className="sm-4 md-4 lg-6 xl-5">
            {documentToReactComponents(contentfulPageAbout.description.json)}
          </div>
        </div>

      </Grid>

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


export default SecondPage
