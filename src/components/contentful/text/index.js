import React from "react";
import Img from 'gatsby-image';
import Video from '../video'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default ({ render, modifier }) => {
  if (modifier === 'centered') {
    return (
      <div className="container article__chunk">
        <div className="container__row">
          <div className="
            type__alignCenter
            container__col-xs-4
            container__col-sm-4
            container__col-md-6
            container__col-md-offset-1
            container__col-lg-6
            container__col-lg-offset-3
          " >
            {documentToReactComponents(render.body.json)}
          </div>
        </div>
      </div>
    )
  } else if (modifier === 'left') {
    return (
      <div className="container article__chunk">
        <div className="container__row">
          <div className="
            container__col-xs-4
            container__col-sm-6
            container__col-sm-offset-1
            container__col-md-6
            container__col-md-offset-1
            container__col-lg-6
          " >
            {documentToReactComponents(render.body.json)}
          </div>
          <div className="
              container__col-xs-4
              container__col-sm-6
              container__col-sm-offset-1
              container__col-md-6
              container__col-md-offset-1
              container__col-lg-6
            " >
            {
              render.image
                ? <Img fluid={render.image.fluid} className="" />
                : null
            }{
              render.video !== null && render.video !== undefined
                ? <Video src={render.video} />
                : null
            }
          </div>
        </div>
      </div>
    )
  } else if (modifier === 'right') {
    return (
      <div className="container article__chunk">
        <div className="container__row contentful__text">
          <div className="
              container__col-xs-4
              container__col-sm-6
              container__col-sm-offset-1
              container__col-md-6
              container__col-md-offset-1
              container__col-lg-6
            " >
            {
              render.image
                ? <Img fluid={render.image.fluid} className="" />
                : null
            }{
              render.video !== null && render.video !== undefined
                ? <Video src={render.video} />
                : null
            }
          </div>
          <div className={`
            text__right
            container__col-xs-4
            container__col-sm-6
            container__col-sm-offset-1
            container__col-md-6
            container__col-md-offset-1
            container__col-lg-6
            ${render.image
              ? ''
              : 'container__col-lg-offset-6'}
          `} >
            {documentToReactComponents(render.body.json)}
          </div>
        </div>
      </div>
    )
  } else return null;
}