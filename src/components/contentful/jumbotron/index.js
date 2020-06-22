import React from "react";
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './index.scss'

const Jumbotron = ({ data }) => {
  return (
    <>
      <div className="jumbotron__titleSection grid__row">

        <div className="sm-4 md-offset-1 md-6 lg-6 xl-offset-1 xl-5">
          <h1>{data.title}</h1>
          <h2>{data.subtitle}</h2>
          <span>{data.tags[0] ? data.tags.join(', ') : null}</span>
        </div>
        <Img
          fluid={data.image.fluid}
          objectFit="contain"
          className="sm-4 md-offset-1 md-6 lg-6 xl-5 jumbotron__coverImage"
          height="100px"
        />

      </div>

      <div className="jumbotron__metaSection grid__row">

        <div className="sm-4 md-offset-1 md-6  lg-offset-1 lg-7 xl-offset-1 xl-7" >
          <h4>Description</h4>
          {data.description !== null ? documentToReactComponents(data.description.json) : null}
        </div>
        {data.teammembers.length >= 2 ? (
          <div className="sm-4 md-offset-1 md-6  lg-3 xl-3">
            <h4>Teammembers</h4>
            <ul className="contentful__jumbotron__teamlist">
              {data.teammembers.map((teammember) => <li key={teammember.fullName} className="teamlist__item">{teammember.fullName}</li>)}
            </ul>
          </div>
        ) : null}

      </div>
    </>
  )
}

export default Jumbotron;