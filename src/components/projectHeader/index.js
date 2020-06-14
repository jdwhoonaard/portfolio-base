import React from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import './index.scss'

const ProjectHeader = ({ data }) => (
  <div className="project__header">

    <div className="project__header__main row fixed">

      <div className="col offset__md__1 md__6 offset__lg__1 lg__5 offset__xlg__1 xlg__5">
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
        <span>{data.tags[0] ? data.tags.join(', ') : null}</span>
      </div>
      <div className="col sm__4 offset__md__1 md__6 lg__5 xlg__5">
        <img className="project__header_cover" alt={`${data.title} cover`} src={data.image.file.url} />
      </div>

    </div>

    <div className="project__header_sub row fixed">

      <div className="col offset__md__1 md__6 offset__lg__1 lg__7 offset__xlg__1 xlg__7" >
        <h4>A small title</h4>
        {data.description !== null ? documentToReactComponents(data.description.json) : null}
      </div>
      <div className="col offset__md__1 md__6 lg__3 xlg__3">
        <h4>Teammembers</h4>
        {data.teammembers[0] ? (
          <ul className="teamlist">
            {data.teammembers.map((teammember) => <li key={teammember.fullName} className="teamlist__item">{teammember.fullName}</li>)}
          </ul>
        ) : null}
      </div>

    </div>

  </div>
)

export default ProjectHeader;