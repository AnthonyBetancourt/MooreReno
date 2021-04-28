import React, { Component } from "react";
import Tile from "./Tile";
 
class Services extends Component {
  render() {
    return (
      <div>
        <h1>Services</h1>
        <div className="services--content">
          <Tile imageUrl="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net" showCta="">
          <div>
            <h5>Designer Services</h5>
            <ul>
              <li>Listen to your vision </li>
              <li>Do everything in our power to create a design exactly how you see it, while staying within budget</li>
              <li>Prepare and present to you a 3D rendering of your new design </li>
              <li>Discuss any changes you desire and alter the rendering to give you a replica of the finished design</li>
              <li>Provide guidance and assistance when selecting  cabinets, countertops, flooring, and tile</li>
            </ul>
          </div>
          </Tile>
          <Tile imageUrl="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net" showCta="">
            <div>
              <h5>Cabinet Distributors</h5>
              <p>Planning a do-it-yourself job?  Just looking to replace old kitchen or bathroom cabinets?   Already have a contractor?</p>
              <p>Moore Home Renovations offers a wide selection of top quality cabinets at up to 60% off retail prices.  
              These cabinets feature:</p>
              <ul>
              <li>All plywood construction</li>
              <li>Full extension drawers and roll outs </li>
              <li>Soft close drawers and doors</li>
              <li>Variety of wood grain, colors, & styles</li>
              </ul>
              <p>Cabinets can be shipped directly to you flat packed or assembled for pick up in our shop.</p>
              <p>Don't have a design? No problem, our designer will prepare a 3D rendering of your project for a minimal fee,  Cost varies depending on our involvement.  Call Sandra for details. 248-864-6790:</p> 
            </div>
          </Tile>
          <Tile imageUrl="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net" showCta="">
            <div>
              <h5>Custom Design Renovations</h5>
              <p>With over 35 years of experience, we offer creative and innovative design ideas.</p>
              <p>We provide full service renovations with a specialty in kitchen and bathrooms.  Licensed and certified, we provide all services required to complete your project without the use of subcontractors. Once your project is started it is our main focus until it is complete.</p>
              <p>You provide your choice of faucets, light fixtures, handles for cabinets, backsplash, and appliances from our suppliers or on your own, we will install them for you at no charge.  We want to make sure your project is fully functional when we leave.</p>
            </div>
          </Tile>
        </div>
      </div>
    );
  }
}
 
export default Services;