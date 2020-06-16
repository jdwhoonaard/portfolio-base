import React from "react"
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

const Card = ({ data }) => {
  return (
    <motion.div
      className="gridCard"
      variants={variants}
    >
      <div className="gridCard__inner">
        <div className="gridCard__info">
          {data.title}
        </div>
      </div>
    </motion.div>
  )
}

export default Card