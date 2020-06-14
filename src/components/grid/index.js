import React from "react"
import PropTypes from "prop-types"
import './index.scss';

const Grid = ({ className, children }) => {
  return (
    <div className={`grid ${className}`}>
      {children}
    </div>
  )
}

Grid.propTypes = {
  className: PropTypes.array,
  children: PropTypes.node.isRequired,
}

export default Grid