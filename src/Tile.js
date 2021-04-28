import React, { Component } from "react";
 
class Tile extends Component {
  render() {
    const showCta = this.props.showCta;
    const showCopy = this.props.showCopy;
    return (
      <div className="tile">
        <div className="tile--img">
          <img src={this.props.imageUrl} alt="" />
        </div>
        <div className="tile--content">
          {showCopy == "true" && (<div className="tile--copy"><p>{this.props.copy}</p></div>)}
          {showCta == "true" && (<div className="tile--cta"><button>Link to Page</button></div>)}
          {this.props.children}
        </div>
      </div>
    );
  }
}
 
export default Tile;