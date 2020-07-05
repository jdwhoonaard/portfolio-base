import React from "react";
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Jumbotron = ({ data }) => {
  return (
    <>
      <div className="container--fluid hero__main" style={{ backgroundColor: data.backgroundColor ? `${data.backgroundColor}` : null }} >
        <div className="container container--menuSpacer">
          <div className="container__row container__row--fillScreen container__row--alignCenter">
            <div
              style={{
                color: data.textColor ? data.textColor : null
              }}
              className="
              container__col-xs-4
              container__col-sm-6
              container__col-sm-offset-1
              container__col-md-6
              container__col-md-offset-1
              container__col-lg-7"
            >
              <h1>{data.title}</h1>
              <h2>{data.subtitle}</h2>
              <span className="type__small">{data.tags[0] ? data.tags.join(', ') : null}</span>
            </div>
            <Img
              fluid={data.image.fluid}
              objectFit="contain"
              className="
                container__col-xs-4
                container__col-sm-6
                container__col-sm-offset-1
                container__col-md-6
                container__col-md-offset-1
                container__col-lg-5
              "
              height="100px"
            />
          </div>
        </div>
      </div>
      <div className="container--fluid backgroundColor--lightGrey hero__meta" >
        <div className="container">
          <div className="container__row">
            <div className="
              container__col-xs-4
              container__col-sm-6
              container__col-sm-offset-1
              container__col-md-6
              container__col-md-offset-1
              container__col-lg-7
            " >
              {data.description !== null ? documentToReactComponents(data.description.json) : null}
            </div>
            {data.teammembers.length >= 2 ? (
              <div className="
                container__col-xs-4
                container__col-sm-6
                container__col-md-6
                container__col-md-offset-1
                container__col-lg-3
              ">
                <h4>Teammembers</h4>
                <ul className="
                ">
                  {data.teammembers.map((teammember) => <li key={teammember.fullName} className="teamlist__item">{teammember.fullName}</li>)}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div >
    </>
  )
}

export default Jumbotron;