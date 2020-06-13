import React from "react";

import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: children => <p>{children}</p>
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => (
      node.data.target.fields
        ? <img key={node.data.target.fields.file['en-US'].url} alt='Project content' src={node.data.target.fields.file['en-US'].url} style={{ maxWidth: '100%' }} />
        : <i>No image available</i>
    )
  }
};


const ProjectHeader = ({ main, sub }) => (
  <>
    <div className="row fixed lg__reverse" style={{
      paddingTop: '4rem',
      minHeight: '100vh',
      display: "flex",
      alignItems: 'center'
    }}>
      <div className="sm__12 offset__md__1 md__10 lg__5 xlg__5">
        <img alt="cover" src={main.image} style={{ maxWidth: '100%' }} />
      </div>
      <div className="sm__12 offset__md__2 md__8 lg__6 xlg__6">
        <h1>{main.title}</h1>
        <h2>{main.subtitle}</h2>
        <span>
          {main.tags[0] ? main.tags.join(', ') : null}
        </span>
      </div>
    </div>

    <div className="row fixed" style={{
      padding: '2rem 0',
      borderTop: '1px solid darkgrey'
    }}>
      <div className="sm__12 offset__md__2 md__8 offset__lg__1 lg__7 offset__xlg__1 xlg__6" >
        <h4>A small title</h4>
        {sub.introduction !== null ? (
          <div className="textWrapper">
            {
              documentToReactComponents(
                sub.introduction.json,
                { options }
              )
            }
          </div>
        ) : null}
      </div>
      <div className="sm__12 offset__md__2 md__8 lg__3 xlg__3">
        <h4>Teammembers</h4>
        {sub.teammembers[0] ? (
          <ul className="taglist">{sub.teammembers.map(teammember => <li key={teammember} className="taglist__item">{teammember}</li>)}</ul>
        ) : null}
      </div>
    </div>

  </>
)

export default ProjectHeader;