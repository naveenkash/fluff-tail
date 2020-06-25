import React, { Component } from "react";
import "./style.scss";
export default class RainbowStackedAccordian extends Component {
  truncate = () => {
    console.log(this.props.truncate);
  }
  render() {
    return (
      <div className="rainbow-card">
        <p>{this.props.title}</p>
        <h2>{this.props.desc}</h2>
      </div>
    );
  }
}
