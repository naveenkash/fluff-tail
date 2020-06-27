import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
function CardHoverInteraction(props) {
  return (
    <div className="interaction-card">
      <img src={props.image} alt={props.alt} />
      <div className="content">
        <h2 className="title">{props.title}</h2>
        <p className="copy">{props.desc}</p>
        {(() => {
          if (props.showBtn) {
            return (
              <a
                className="btn"
                href={props.href ? props.href : "/#"}
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
  alt: "Image",
  image:
    "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
};

CardHoverInteraction.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  href: PropTypes.string,
  showBtn: PropTypes.bool,
  desc: PropTypes.string,
  title: PropTypes.string,
  openNewPage: PropTypes.bool,
};
export default CardHoverInteraction;
