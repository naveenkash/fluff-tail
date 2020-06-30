import React, { useEffect } from "react";
import "./style.scss";
import PropTypes from "prop-types";
function getRandomKey() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

class ArticleDeck extends React.Component {
  static defaultprops = {
    openNewPage: false,
  };
  componentDidMount() {
    if (this.props.titleColor)
      document.querySelector(".article-deck-child h2").style.color =
        this.props.titleColor;

    if (this.props.subTitleColor)
      document.querySelector(".article-deck-child p").style.color =
        this.props.subTitleColor;

    if (this.props.width)
      document.querySelector(".article-deck-wrapper").style.width =
        this.props.width + "px";

    if (this.props.height)
      document.querySelector(".article-deck-wrapper").style.height =
        this.props.height + "px";
  }
  render() {
    return (
      <div
        className="article-deck-wrapper"
        style={{
          "--article-count": this.props.number,
        }}
      >
        <div className="article-deck-card">
          <a
            href={this.props.href ? this.props.href : "/#"}
            target={this.props.openNewPage ? "_blank" : "_self"}
          >
            <div className="article-deck-child">
              <h2>{this.props.title ? this.props.title : ""}</h2>
              <p>{this.props.subTitle ? this.props.subTitle : ""}</p>
            </div>
          </a>
          {(() => {
            if (this.props.number > 0) {
              return [...Array(this.props.number)].map(() => {
                return (
                  <div
                    className="article-deck-child"
                    key={getRandomKey()}
                  ></div>
                );
              });
            }
          })()}
        </div>
      </div>
    );
  }
}

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
