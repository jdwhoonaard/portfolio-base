import React from "react"
import { Link } from "gatsby"
import { motion } from 'framer-motion';

import SEO from "../components/seo"
import Grid from "../components/grid"
import Card from "../components/card"

const featured = [
  {
    title: 'About me',
    url: '/about/'
  },
  {
    title: 'Recharge my party',
    url: '/rechargemyparty/'
  },
  {
    title: 'Hivemind',
    url: '/hivemind/'
  },
  {
    title: 'Philips Hue',
    url: '/hue/'
  }
]

const IndexPage = () => (
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
          <h1>
            <b>Front end Developer,</b>
            <br />UX Designer &
            <br />Coffee Afficionado
          </h1>
        </div>
      </div>

      <div className="grid__row">
        {
          featured.map(card => (
            <div className="sm-4 md-2 lg-3 xl-3">
              <Link className="" key={card.url} to={card.url}>
                <Card title={card.title} />
              </Link>
            </div>
          ))
        }
      </div>
    </Grid>
  </motion.div >
)

export default IndexPage
