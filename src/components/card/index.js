import React from "react"
import { motion } from 'framer-motion'
import Img from 'gatsby-image';
import './index.scss';

const variants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

const hoverAndTap = {
  scale: 1.05,
  zIndex: 50,
  boxShadow: "0 8px 32px -8px rgba(0,0,0,1)",
  transition: {
    type: "spring",
    damping: 50,
    mass: 1,
    stiffness: 200,
  }
}

const Card = ({ data }) => {
  if (data.internal.type === 'ContentfulPageAbout') {
    return (
      <motion.div
        className="card"
        variants={variants}
        whileHover={hoverAndTap}
        onTap={hoverAndTap}
      >
        <div className="card__inner">
          <div className="card__info">About me</div>
        </div>
        <div className="card__image">
          <Img fluid={data.profileImage.fluid} objectFit="contain" />
        </div>
      </motion.div >
    )
  } else if (data.internal.type === 'ContentfulTemplateProject') {
    return (
      <motion.div
        className="card"
        style={{
          color: data.textColor ? data.textColor : null,
          backgroundColor: data.backgroundColor ? data.backgroundColor : null
        }}
        variants={variants}
        whileHover={hoverAndTap}
        onTap={hoverAndTap}
      >
        <div className="card__inner">
          <div
            className="card__info"
            style={{
              color: data.textColor ? data.textColor : null
            }}
          >
            {data.title}
          </div>
          <div className="card__image">
            {data.image
              ? <Img className="card__image" fluid={data.image.fluid} />
              : null
            }
          </div>
        </div>
      </motion.div>
    )
  }
}

export default Card
