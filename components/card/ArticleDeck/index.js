import React, { useEffect } from "react";
import "./style.scss";
import PropTypes from "prop-types";
function getRandomKey() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

function ArticleDeck(props) {
  useEffect(() => {
    if (props.titleColor)
      document.querySelector(".article-deck-child h2").style.color =
        props.titleColor;

    if (props.subTitleColor)
      document.querySelector(".article-deck-child p").style.color =
        props.subTitleColor;

    if (props.width)
      document.querySelector(".article-deck-wrapper").style.width =
        props.width + "px";

    if (props.height)
      document.querySelector(".article-deck-wrapper").style.height =
        props.height + "px";
  });

  return (
    <div
      className="article-deck-wrapper"
      style={{
        "--article-count": props.number,
      }}
    >
      <div className="article-deck-card">
        <a
          href={props.href ? props.href : "/#"}
          target={props.openNewPage ? "_blank" : "_self"}
        >
          <div className="article-deck-child">
            <h2>{props.title ? props.title : ""}</h2>
            <p>{props.subTitle ? props.subTitle : ""}</p>
          </div>
        </a>
        {(() => {
          if (props.number > 0) {
            return [...Array(props.number)].map(() => {
              return (
                <div className="article-deck-child" key={getRandomKey()}></div>
              );
            });
          }
        })()}
      </div>
    </div>
  );
}

ArticleDeck.defaultProps = {
  openNewPage: false,
};

ArticleDeck.propTypes = {
  number: PropTypes.number,
  href: PropTypes.string,
  openNewPage: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  subTitleColor: PropTypes.string,
  TitleColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
export default ArticleDeck;
