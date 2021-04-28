import React, { Component } from "react";
 
class Tile extends Component {
  render() {
    const showTitle = this.props.showTitle;
    const showCta = this.props.showCta;
    const showCopy = this.props.showCopy;
    return (
      <div className="tile">
        <div className="tile--img">
          <img src={this.props.imageUrl} alt="" />
        </div>
        <div className="tile--content">
          {showTitle === "true" && (<div className="title--title"><h3>{this.props.title}</h3></div>)}
          {showCopy === "true" && (<div className="tile--copy"><p>{this.props.copy}</p></div>)}
          {showCta === "true" && (<div className="tile--cta"><button>Link to Page</button></div>)}
          {this.props.children}
        </div>
      </div>
    );
  }
}
 
export default Tile;