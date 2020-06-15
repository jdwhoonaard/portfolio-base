import React from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import './index.scss'


const Text = ({ data, modifier }) => {

  if (modifier === 'centered') {
    return (
      <div className="grid__row fixed contentful__text">
        <div className="sm-4 md-8 lg-offset-3 lg-6 xl-offset-3 xl-6 contentful__text__centered" >
          {documentToReactComponents(data.body.json)}
        </div>
      </div>
    )
  } else if (modifier === 'left') {
    return (
      <div className="grid__row fixed contentful__text">
        <div className="md-4 lg-offset-1 lg-5 xl-offset-1 xl-5" >
          {documentToReactComponents(data.body.json)}
        </div>
        {data.image ? (
          <div className={`sm-4 md-4 lg-5 xl-5`} >
            <img src={data.image.file.url} className="contentful__text__image" />
          </div>
        ) : null}
      </div>
    )
  } else if (modifier === 'right') {
    return (
      <div className="grid__row fixed contentful__text">
        {data.image ? (
          <div className="sm-4 md-4 lg-5 xl-5 lg-offset-1 xl-offset-1" >
            <img src={data.image.file.url} className="contentful__text__image" />
          </div>
        ) : null}
        <div className={`md-4 lg-5 xl-5 ${data.image ? '' : 'md-offset-4 lg-offset-6 xl-offset-6'} text__right`} >
          {documentToReactComponents(data.body.json)}
        </div>
      </div>
    )
  } else return null;
}

export default Text;