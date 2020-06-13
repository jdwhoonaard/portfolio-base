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

const GridCard = (props) => {
  return (
    <motion.div
      className="gridCard"
      variants={variants}
    >
      <div className="gridCard__inner">
        <div className="gridCard__info">
          {props.title}
        </div>
      </div>
    </motion.div>
  )
}

GridCard.propTypes = {
  title: PropTypes.string.isRequired,
}

export default GridCard