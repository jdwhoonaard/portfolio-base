import React from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import './index.scss'


const Text = ({ data }) => (
  <div className="contentful__text grid__row fixed">
    <div className="md-6 lg-5 xl-5 md-offset-1 lg-offset-1 xl-offset-1">
      {documentToReactComponents(data.body.json)}
    </div>
    {
      data.images.map((image, i) => {
        return (
          <div className={`md-6 lg-5 xl-5 ${i % 2 == 1 ? 'md-offset-1 lg-offset-1 xl-offset-1' : ''}`}>
            <img className="contentful__text__image" src={image.file.url} />
          </div>
        )
      })
    }
  </div >
)

export default Text;