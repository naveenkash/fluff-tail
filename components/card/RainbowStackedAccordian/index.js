import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.scss";
export default class RainbowStackedAccordian extends Component {
  static defaultProps = {
    headingColor: "#000000",
    descColor: "#000000",
    disabled: false,
    openNewPage: false,
  };

  render() {
    return (
      <div className="rainbow-card">
        <a
          href={this.props.disabled ? "/#" : this.props.href}
          target={this.props.openNewPage ? "_blank" : "_self"}
        >
          {(() => {
            if (this.props.title) {
              return (
                <p style={{ color: this.props.headingColor }}>
                  {this.props.title}
                </p>
              );
            }
          })()}
          {(() => {
            if (this.props.title) {
              return (
                <h2 style={{ color: this.props.descColor }}>
                  {this.props.desc}
                </h2>
              );
            }
          })()}
        </a>
      </div>
    );
  }
}

RainbowStackedAccordian.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  href: PropTypes.string,
  descColor: PropTypes.string,
  headingColor: PropTypes.string,
  disabled: PropTypes.bool,
  openNewPage: PropTypes.bool,
};
