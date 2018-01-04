import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./app/components/home/home.js";
import AboutMe from "./app/components/about-me/about-me.js";
import Contact from "./app/components/contact/contact.js";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <header className="header">
            <h1 className="title">Sylvia Allain</h1>
            <ul className="navigation">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/aboutme">About Me</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </header>
          <body className="body">
            <Route exact path="/" component={Home}/>
            <Route path="/aboutme" component={AboutMe}/>
            <Route path="/contact" component={Contact}/>
          </body>
        </div>
      </HashRouter>
    );
  }
}

export default App;
