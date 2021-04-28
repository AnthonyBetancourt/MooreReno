import React, { Component } from "react";
 
class Paragarph extends Component {
  render() {
    return (
      <div>
        <p>{this.props.copy}</p>
      </div>
    );
  }
}
 
export default Paragarph;