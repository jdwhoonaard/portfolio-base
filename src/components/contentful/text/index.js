import React from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import './index.scss'


const Text = ({ data }) => (
  <div className="project__genericText">

    <div className="project__genericText row fixed">
      <div className="col offset__md__1 md__6 offset__lg__1 lg__7 offset__xlg__1 xlg__7">
        {documentToReactComponents(data.body.json)}
      </div>
    </div>

  </div>
)

export default Text;