import React from "react"
import { Link } from "gatsby"
import { motion } from 'framer-motion';

import SEO from "../components/seo"
import GridView from "../components/gridView"
import GridCard from "../components/gridCard"

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
    <div className="fixed header__spacer">
      <h1>Frontend<br />Developer,</h1>
      <h2>UX Designer &<br />Coffee Afficionado</h2>
    </div>
    <div className="fixed">
      <GridView>
        {
          featured.map(card => (
            <Link className="gridView__card" key={card.url} to={card.url}>
              <GridCard title={card.title} />
            </Link>
          ))
        }
      </GridView>
    </div>
  </motion.div >
)

export default IndexPage
