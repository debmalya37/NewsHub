import "./App.css";
import React, { Component } from "react";
import NavBar from "../src/components/navbar";
import News from "../src/components/news";

export default class App extends Component {
  render() {
    return <>
      <NavBar />
      <News />
    </>;
  }
}
