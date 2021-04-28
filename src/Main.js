import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Nav/>
          <main className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/pages/services" component={Services}/>
            <Route path="/pages/contact" component={Contact}/>
          </main>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;