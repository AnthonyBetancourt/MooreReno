import React, { Component } from "react";
import {
  NavLink
} from "react-router-dom";
import Image from "../components/Image";
 
class Nav extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          {/* <Image imageURL="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net" /> */}
          <div class="title">
          <h1>Moore Home Renovations LLC</h1>
          <h5>Kitchen & Bath Specialists</h5>
          </div>
        </div>
        <ul class="links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/pages/services">Services</NavLink></li>
          <li><NavLink to="/pages/contact">Contact Us</NavLink></li>
        </ul>
      </header>
    );
  }
}
 
export default Nav;