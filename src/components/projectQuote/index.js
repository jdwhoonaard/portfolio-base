import React from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import './index.scss'


const ProjectText = ({ data }) => (
  <div className="project__genericQuote">

    <div className="project__genericQuote row fixed">
      <div className="col md__8 lg__12 xlg__12">
        <blockquote>{documentToReactComponents(data.quote.json)}</blockquote>
        <p>{'- ' + data.source}</p>
      </div>
    </div>

  </div>
)

export default ProjectText;