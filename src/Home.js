import React, { Component } from "react";
// import Image from "./Image";
import Carousel from "./Carousel";
import Paragarph from "./Paragarph";
import Tile from "./Tile";

class Home extends Component {
  render() {
    return (
      <div>
      <Carousel
        wrapperClass="home-page--carousel"
        title="Image Gallery"
      />
      <Paragarph copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula augue, consectetur quis est vel, aliquam laoreet mi. Nulla rhoncus porttitor ex venenatis faucibus. Nam in tristique est. Integer interdum consequat nisi, id cursus lacus varius iaculis."/>
      <Paragarph copy="Nullam in massa sit amet metus condimentum pulvinar. Vivamus a arcu semper, pellentesque massa ut, sodales lectus. Sed eros justo, venenatis vel gravida nec, porta ac ante. Maecenas faucibus tincidunt varius."/>
      <Tile
        imageUrl="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net"
        copy="Nullam in massa sit amet metus condimentum pulvinar. Vivamus a arcu semper, pellentesque massa ut, sodales lectus. Sed eros justo, venenatis vel gravida nec, porta ac ante. Maecenas faucibus tincidunt varius."
      />
    </div>
    );
  }
}

export default Home;