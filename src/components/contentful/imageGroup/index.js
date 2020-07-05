import React from "react";
import Img from 'gatsby-image';

const ImageGroup = ({ render }) => {
  if (render.images.length === 1) {
    return (
      <div className="container article__chunk">
        <div className="container__row article__imageGroup">
          <div className="
            container__col-xs-4
            container__col-sm-6
            container__col-sm-offset-1
            container__col-md-8
            container__col-lg-12
          " >
            {render.images.map(image => (
              <Img key={JSON.stringify(image.fluid.base64)} fluid={image.fluid} />
            ))}
          </div>
        </div>
      </div>
    )
  } else if (render.images.length !== 1 && !(render.images.length % 2)) {
    return (
      <div className="container article__chunk">
        <div className="container__row article__imageGroup">
          {render.images.map((image, i) => (
            <div className={`
            container__col-xs-4
            container__col-sm-6
            container__col-sm-offset-1
            container__col-md-6
            container__col-md-offset-1
            container__col-lg-6
          `} >
              <Img fluid={image.fluid} />
            </div>
          ))
          }
        </div >
      </div>
    )
  } else if (render.images.length !== 1 && render.images.length % 2) {
    return (
      <div className="container article__chunk">
        <div className="container__row article__imageGroup">
          {render.images.map((image, i) => (
            <div key={JSON.stringify(image.fluid.base64)} className={`
              container__col-xs-4
              container__col-sm-6
              container__col-sm-offset-1
              container__col-md-6
              container__col-md-offset-1
              container__col-lg-5
              sm-4 md-offset-1 md-6 lg-5 xl-5 ${i % 2
                ? ''
                : 'container__col-md-offset-1 container__col-lg-offset-1'}
            `} >
              <Img fluid={image.fluid} />
            </div>
          ))
          }
        </div>
      </div>
    )
  } else return 'what?'
}

export default ImageGroup;