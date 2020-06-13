import React from "react"
import PropTypes from "prop-types"
import './index.scss';

const GridView = ({ children }) => {
  return (
    <div className="gridView">
      {children}
    </div>
  )
}

GridView.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GridView