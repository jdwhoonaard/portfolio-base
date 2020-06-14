import React from "react"
import PropTypes from "prop-types"
import './index.scss';

const Row = ({ className, children }) => {
  return (
    <div className={`gridRow ${className}`}>
      {children}
    </div>
  )
}

Row.propTypes = {
  className: PropTypes.array,
  children: PropTypes.node.isRequired,
}

export default Row