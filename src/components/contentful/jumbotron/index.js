import React from "react";
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './index.scss'

const Jumbotron = ({ data }) => {
  return (
    <>
      <div className="contentful__jumbotron__titleSection grid__row">

        <div className="sm-4 md-8 lg-6 xl-offset-1 xl-5">
          <h1>{data.title}</h1>
          <h2>{data.subtitle}</h2>
          <span>{data.tags[0] ? data.tags.join(', ') : null}</span>
        </div>
        <div className="md-offset-1 md-6 lg-6 xl-5">
          <Img fluid={data.image.fluid} className="contentful__jumbotron__cover" />
        </div>

      </div>

      <div className="contentful__jumbotron__metaSection grid__row">

        <div className="sm-4 md-8 lg-offset-1 lg-7 xl-offset-1 xl-7" >
          <h4>A small title</h4>
          {data.description !== null ? documentToReactComponents(data.description.json) : null}
        </div>
        <div className="sm-4 md-8 lg-3 xl-3">
          <h4>Teammembers</h4>
          {data.teammembers[0] ? (
            <ul className="contentful__jumbotron__teamlist">
              {data.teammembers.map((teammember) => <li key={teammember.fullName} className="teamlist__item">{teammember.fullName}</li>)}
            </ul>
          ) : null}
        </div>

      </div>
    </>
  )
}

export default Jumbotron;