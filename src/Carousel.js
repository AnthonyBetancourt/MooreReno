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
            <img src="https://via.placeholder.com/450/000000/FFFFFF/?text=Gallery+Image+1" alt=""/>
          </div>
          <div>
          <img src="https://via.placeholder.com/450/000000/FFFFFF/?text=Gallery+Image+2" alt=""/>
          </div>
          <div>
          <img src="https://via.placeholder.com/450/000000/FFFFFF/?text=Gallery+Image+3" alt=""/>
          </div>
          <div>
          <img src="https://via.placeholder.com/450/000000/FFFFFF/?text=Gallery+Image+4" alt=""/>
          </div>
          <div>
          <img src="https://via.placeholder.com/450/000000/FFFFFF/?text=Gallery+Image+5" alt=""/>
          </div>
          <div>
          <img src="https://via.placeholder.com/450/000000/FFFFFF/?text=Gallery+Image+6" alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}