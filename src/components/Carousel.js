import React, { Component } from "react";
import Slider from "react-slick";
// Default CSS for Slider
import "slick-carousel/slick/slick.css";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className={this.props.wrapperClass}>
        <h2>{this.props.title}</h2>
        <Slider {...settings}>
          <div>
            <img src={"images/kitchen-samples-1.jpg"} alt="Sample Kitchen 1"/>
          </div>
          <div>
          <img src={"images/kitchen-samples-2.jpg"} alt="Sample Kitchen 2"/>
          </div>
          <div>
          <img src={"images/kitchen-samples-3.jpg"} alt="Sample Kitchen 3"/>
          </div>
          <div>
          <img src={"images/kitchen-samples-4.jpg"} alt="Sample Kitchen 4"/>
          </div>
          <div>
          <img src={"images/kitchen-samples-1.jpg"} alt="Sample Kitchen 1"/>
          </div>
          <div>
          <img src={"images/kitchen-samples-2.jpg"} alt="Sample Kitchen 2"/>
          </div>
        </Slider>
      </div>
    );
  }
}