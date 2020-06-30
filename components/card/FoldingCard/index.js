import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { createStyleTag, addRulesToStyleTag } from "../../helper-functions";

class FoldingCard extends React.Component {
  static defaultProps = {
    openNewPage: false,
  };
  componentDidMount() {
    let styleTag = createStyleTag();
    if (this.props.titleColor)
      addRulesToStyleTag(
        styleTag,
        `.folding__title {color: ${this.props.titleColor};} `
      );
    if (this.props.backgroundColor)
      addRulesToStyleTag(
        styleTag,
        `.folding__link{background: ${this.props.backgroundColor};} `
      );
    if (this.props.mainBorderColor)
      addRulesToStyleTag(
        styleTag,
        `.folding__content{border-color: ${this.props.mainBorderColor};} `
      );
    if (this.props.folderHoverColor)
      addRulesToStyleTag(
        styleTag,
        `.folding__link:hover .folding__content--rhs{background: ${this.props.folderHoverColor};}`
      );
    if (this.props.stripeColor)
      addRulesToStyleTag(
        styleTag,
        `.folding__article:before{background-image: repeating-linear-gradient(-24deg, transparent, transparent 4px, ${this.props.stripeColor} 0, ${this.props.stripeColor} 5px);border-color:${this.props.secondaryBorderColor}}`
      );
    if (this.props.arrowColor)
      addRulesToStyleTag(
        styleTag,
        `.folding__link:after{background:${this.props.arrowColor}}`
      );

    if (this.props.subTitleColor)
      addRulesToStyleTag(
        styleTag,
        `.folding__link:after{background:${this.props.subTitleColor}}`
      );

    if (this.props.width)
      addRulesToStyleTag(
        styleTag,
        `.folding__article,
         .folding__article:before {
           width: ${this.props.width}px;
         }`
      );

    if (this.props.height)
      addRulesToStyleTag(
        styleTag,
        `.folding__article,
         .folding__article:before {
           height: ${this.props.height}px;
         }`
      );
  }
  render() {
    return (
      <div className="folding__article">
        <a
          className="folding__link"
          href={this.props.href ? this.props.href : "/#"}
          target={this.props.openNewPage ? "_blank" : "_self"}
        >
          <div className="folding__content folding__content--lhs">
            <h2 className="folding__title">
              {this.props.title ? this.props.title : ""}
            </h2>
            <div className="folding__footer">
              <p>{this.props.subTitleLeft ? this.props.subTitleLeft : ""}</p>
              <p>{this.props.subTitleRight ? this.props.subTitleRight : ""}</p>
            </div>
          </div>
          <div
            className="folding__content folding__content--rhs"
            aria-hidden="true"
          >
            <h2 className="folding__title">
              {this.props.title ? this.props.title : ""}
            </h2>
            <div className="folding__footer">
              <p>{this.props.subTitleLeft ? this.props.subTitleLeft : ""}</p>
              <p>{this.props.subTitleRight ? this.props.subTitleRight : ""}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

FoldingCard.propTypes = {
  href: PropTypes.string,
  openNewPage: PropTypes.bool,
  title: PropTypes.string,
  subTitleLeft: PropTypes.string,
  subTitleRight: PropTypes.string,
  backgroundColor: PropTypes.string,
  titleColor: PropTypes.string,
  folderHoverColor: PropTypes.string,
  mainBorderColor: PropTypes.string,
  secondaryBorderColor: PropTypes.string,
  arrowColor: PropTypes.string,
  subTitleColor: PropTypes.string,
  stripeColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
export default FoldingCard;
