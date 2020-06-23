import React from "react";
import './index.scss';

export default ({ src }) => {
  return (
    <div className="grid__row fixed contentful__imageGroup">
      <div className="contentful__video sm-4 md-offset-1 md-6 lg-offset-1 lg-10 xl-offset-2 xl-8" >
        <iframe
          width="560"
          height="315"
          src={src}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
  )
}