import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
class CardHoverInteraction extends React.Component {
  static defaultprops = {
    showBtn: true,
    alt: "Image",
  };
  render() {
    return (
      <div className="interaction-card">
        <img src={this.props.image} alt={this.props.alt} />
        <div className="content">
          <h2 className="title">{this.props.title}</h2>
          <p className="copy">{this.props.desc}</p>
          {(() => {
            if (this.props.showBtn) {
              return (
                <a
                  className="btn"
                  href={this.props.href ? this.props.href : "/#"}
                  target={this.props.openNewPage ? "_blank" : "_self"}
                  tabIndex="0"
                >
                  {this.props.btnTitle}
                </a>
              );
            }
          })()}
        </div>
      </div>
    );
  }
}

CardHoverInteraction.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  href: PropTypes.string,
  showBtn: PropTypes.bool,
  desc: PropTypes.string,
  title: PropTypes.string,
  openNewPage: PropTypes.bool,
  btnTitle: PropTypes.string,
};
export default CardHoverInteraction;
