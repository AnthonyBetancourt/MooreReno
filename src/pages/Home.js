import React, { Component } from "react";
// import Image from "./Image";
import Carousel from "../components/Carousel";
import Paragarph from "../components/Paragarph";
import Tile from "../components/Tile";

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel
          wrapperClass="home-page--carousel"
        />
      <div class="homepage--copy">
        <Paragarph
          class="center bold"
          copy="We are Family owned with NO Subcontractors Over 35 Years Experience Licensed and Insured"
        />
        <Paragarph
          class="center"
          copy="Outstanding Product         *        Fabulous Design        *        Guaranteed Installation"
        />
        <Paragarph
          class="center"
          copy="We are an Oakland County based company serving the surrounding area.  With over 35 years of experience, our specialist can help you customize and design your dream kitchen or bathroom."
        />
      </div>
      <div class="tile--container">
        <Tile
          imageUrl={"images/kitchen-samples-4.jpg"}
          showTitle="true"
          title="Cabinet Distributor"
          showCopy="true"
          copy="Nullam in massa sit amet metus condimentum pulvinar. Vivamus a arcu semper, pellentesque massa ut, sodales lectus. Sed eros justo, venenatis vel gravida nec, porta ac ante. Maecenas faucibus tincidunt varius."
        />
        <Tile
          imageUrl={"images/kitchen-samples-2.jpg"}
          showTitle="true"
          title="Services"
          showCopy="true"
          copy="Nullam in massa sit amet metus condimentum pulvinar. Vivamus a arcu semper, pellentesque massa ut, sodales lectus. Sed eros justo, venenatis vel gravida nec, porta ac ante. Maecenas faucibus tincidunt varius."
        />
        <Tile
          imageUrl={"images/kitchen-samples-3.jpg"}
          showTitle="true"
          title="Gallery"
          showCopy="true"
          copy="Nullam in massa sit amet metus condimentum pulvinar. Vivamus a arcu semper, pellentesque massa ut, sodales lectus. Sed eros justo, venenatis vel gravida nec, porta ac ante. Maecenas faucibus tincidunt varius."
        />
      </div>
      <div class="homepage--copy">
          <Paragarph
            class="center"
            copy="Call or email for your FREE estimate"
          />
          <Paragarph
            class="center"
            copy="248-703-3989/Brian      248-864-6790/Sandra"
          />
          <Paragarph
            class="center"
            copy="moorehomerenovations@gmail.com"
          />
        </div>
    </div>
    );
  }
}

export default Home;