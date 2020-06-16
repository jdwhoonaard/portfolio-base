import React from "react";
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './index.scss'

export default ({ render, modifier }) => {
  if (modifier === 'centered') {
    return (
      <div className="grid__row fixed contentful__text">
        <div className="sm-4 md-8 lg-offset-3 lg-6 xl-offset-3 xl-6 contentful__text__centered" >
          {documentToReactComponents(render.body.json)}
        </div>
      </div>
    )
  } else if (modifier === 'left') {
    return (
      <div className="grid__row fixed contentful__text">
        <div className="md-4 lg-offset-1 lg-5 xl-offset-1 xl-5" >
          {documentToReactComponents(render.body.json)}
        </div>
        {render.image ? (
          <div className={`sm-4 md-4 lg-5 xl-5`} >
            <Img fluid={render.image.fluid} className="contentful__text__image" />
          </div>
        ) : null}
      </div>
    )
  } else if (modifier === 'right') {
    return (
      <div className="grid__row fixed contentful__text">
        {render.image ? (
          <div className="sm-4 md-4 lg-5 xl-5 lg-offset-1 xl-offset-1" >
            <Img fluid={render.image.fluid} className="contentful__text__image" />
          </div>
        ) : null}
        <div className={`md-4 lg-5 xl-5 ${render.image ? '' : 'md-offset-4 lg-offset-6 xl-offset-6'} text__right`} >
          {documentToReactComponents(render.body.json)}
        </div>
      </div>
    )
  } else return null;
}