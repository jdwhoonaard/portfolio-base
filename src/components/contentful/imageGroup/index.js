import React from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import './index.scss'


const ImageGroup = ({ data, modifier }) => {

  return (
    <div className="grid__row fixed contentful__imageGroup">
      {data
      }
      <div className="sm-4 md-8 lg-offset-3 lg-6 xl-offset-3 xl-6 contentful__text__centered" >

      </div>
    </div>
  )
}

export default ImageGroup;