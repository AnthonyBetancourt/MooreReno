import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Nav/>
          <main className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/services" component={Services}/>
            <Route path="/contact" component={Contact}/>
          </main>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;