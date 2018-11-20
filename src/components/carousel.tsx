import * as React from "react";
import Slider, { Settings } from "react-slick";
import "./carousel.css";

import { BackSvg } from "@/components/svg/BackSvg";
import { FrontSvg } from "@/components/svg/FrontSvg";

export class Carousel extends React.Component {
  public render() {
    const settings: Settings = {
      arrows: true,
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500,
      swipe: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <FrontSvg />
          </div>
          <div>
            <BackSvg />
          </div>
        </Slider>
      </div>
    );
  }
}
