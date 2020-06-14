import React from "react"
import PropTypes from "prop-types"
import { motion } from 'framer-motion'
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

const Card = ({ title }) => {
  return (
    <motion.div
      className="gridCard"
      variants={variants}
    >
      <div className="gridCard__inner">
        <div className="gridCard__info">
          {title}
        </div>
      </div>
    </motion.div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Card