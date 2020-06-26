import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
function CardHoverInteraction(props) {
  return (
    <div className="interaction-card">
      <div className="content">
        <h2 className="title">{props.title}</h2>
        <p className="copy">{props.desc}</p>
        {(() => {
          if (props.showBtn) {
            return (
              <a
                className="btn"
                href={props.href ? props.href : "javascript: void (0)"}
                target={props.openNewPage ? "_blank" : "_self"}
                tabIndex="0"
              >
                {props.btnTitle}
              </a>
            );
          }
        })()}
      </div>
    </div>
  );
}
CardHoverInteraction.defaultProps = {
  showBtn: true,
};
CardHoverInteraction.propTypes = {
  href: PropTypes.string,
  showBtn: PropTypes.bool,
  desc: PropTypes.string,
  title: PropTypes.string,
  openNewPage: PropTypes.bool,
};
export default CardHoverInteraction;
