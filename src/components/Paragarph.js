import React, { Component } from "react";
 
class Paragarph extends Component {
  render() {
    return (
      <div>
        <p className={this.props.class}>{this.props.copy}</p>
      </div>
    );
  }
}
 
export default Paragarph;