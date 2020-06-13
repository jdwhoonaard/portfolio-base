import React from "react"
import { Link } from "gatsby"
import { motion } from 'framer-motion'

import SEO from "../components/seo"

const SecondPage = () => (
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
    <SEO title="about me" />
    <div className="fixed header__spacer">
      <h1>About me</h1>
      <p>Welcome to the about me page</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </motion.div>
)

export default SecondPage
