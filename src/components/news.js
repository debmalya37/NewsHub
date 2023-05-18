import React, { Component } from "react";
import NewsItem from "./newsItem";
export class news extends Component {
  render() {
    return (
      <div className="container my-3">
      <h1>TOP NEWS HEADLINES</h1>
        <NewsItem />
      </div>
    );
  }
}

export default news;
