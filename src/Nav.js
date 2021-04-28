import React, { Component } from "react";
import {
  NavLink
} from "react-router-dom";
import Image from "./Image";
 
class Nav extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Image imageURL="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net" />
        </div>
        <ul class="links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
      </header>
    );
  }
}
 
export default Nav;