import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./style.scss";
function append(styleTag, node) {
  styleTag.appendChild(document.createTextNode(node));
}
function FoldingCard(props) {
  let styleElem = document.head.appendChild(document.createElement("style"));
  let attr = document.createAttribute("type");
  attr.value = "text/css";
  styleElem.setAttributeNode(attr);

  useEffect(() => {
    if (props.titleColor)
      append(styleElem, `.folding__title {color: ${props.titleColor};} `);
    if (props.backgroundColor)
      append(
        styleElem,
        `.folding__link{background: ${props.backgroundColor};} `
      );
    if (props.mainBorderColor)
      append(
        styleElem,
        `.folding__content{border-color: ${props.mainBorderColor};} `
      );
    if (props.folderHoverColor)
      append(
        styleElem,
        `.folding__link:hover .folding__content--rhs{background: ${props.folderHoverColor};}`
      );
    if (props.stripeColor)
      append(
        styleElem,
        `.folding__article:before{background-image: repeating-linear-gradient(-24deg, transparent, transparent 4px, ${props.stripeColor} 0, ${props.stripeColor} 5px);border-color:${props.secondaryBorderColor}}`
      );
    if (props.arrowColor)
      append(styleElem, `.folding__link:after{background:${props.arrowColor}}`);

    if (props.subTitleColor)
      append(
        styleElem,
        `.folding__link:after{background:${props.subTitleColor}}`
      );

    if (props.width)
      append(
        styleElem,
        `.folding__article,
         .folding__article:before {
           width: ${props.width}px;
         }`
      );

    if (props.height)
      append(
        styleElem,
        `.folding__article,
         .folding__article:before {
           height: ${props.height}px;
         }`
      );
  });

  return (
    <div className="folding__article">
      <a
        className="folding__link"
        href={props.href ? props.href : "/#"}
        target={props.openNewPage ? "_blank" : "_self"}
      >
        <div className="folding__content folding__content--lhs">
          <h2 className="folding__title">{props.title ? props.title : ""}</h2>
          <div className="folding__footer">
            <p>{props.subTitleLeft ? props.subTitleLeft : ""}</p>
            <p>{props.subTitleRight ? props.subTitleRight : ""}</p>
          </div>
        </div>
        <div
          className="folding__content folding__content--rhs"
          aria-hidden="true"
        >
          <h2 className="folding__title">{props.title ? props.title : ""}</h2>
          <div className="folding__footer">
            <p>{props.subTitleLeft ? props.subTitleLeft : ""}</p>
            <p>{props.subTitleRight ? props.subTitleRight : ""}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
FoldingCard.defaultProps = {
  openNewPage: false,
};
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
