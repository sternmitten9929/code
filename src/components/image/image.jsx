import React from "react";
import ME from '../../assets/me-about.jpg'

const image = ({src}) => {
    return (
     <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="" />
        </div>
      </div>
      </div>
    )
}

const Image = ({src}) => {}