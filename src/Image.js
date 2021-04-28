import React, { Component } from "react";
 
class Image extends Component {
  render() {
    return (
      <div>
        <img src={this.props.imageURL} alt=""/>
      </div>
    );
  }
}
 
export default Image;