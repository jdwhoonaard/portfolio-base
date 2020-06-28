import React from "react";
import Img from 'gatsby-image';

import './index.scss'


const ImageGroup = ({ render }) => {
  if (render.images.length === 1) {
    return (
      <div className="grid__row fixed contentful__imageGroup">
        <div className="sm-4 md-offset-1 md-6 lg-12 xl-12" >
          {render.images.map(image => (
            <Img key={JSON.stringify(image.fluid.base64)} fluid={image.fluid} />
          ))}
        </div>
      </div>
    )
  } else if (render.images.length !== 1 && !(render.images.length % 2)) {
    return (
      <div className="grid__row fixed contentful__imageGroup">
        {render.images.map((image, i) => (
          <div className={`sm-4 md-offset-1 md-6 lg-6 xl-6`} >
            <Img fluid={image.fluid} />
          </div>
        ))
        }
      </div >
    )
  } else if (render.images.length !== 1 && render.images.length % 2) {
    return (
      <div className="grid__row fixed contentful__imageGroup">
        {render.images.map((image, i) => (
          <div key={JSON.stringify(image.fluid.base64)} className={`sm-4 md-offset-1 md-6 lg-5 xl-5 ${i % 2 ? '' : 'lg-offset-1 xl-offset-1'}`} >
            <Img fluid={image.fluid} />
          </div>
        ))
        }
      </div >
    )
  } else return 'what?'
}

export default ImageGroup;