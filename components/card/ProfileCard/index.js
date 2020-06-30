import React, { useEffect } from "react";
import "./style.scss";
import PropTypes from "prop-types";
import { createStyleTag, addRulesToStyleTag } from "../../helper-functions";

function ProfileCard(props) {
  useEffect(() => {
    let styleTag = createStyleTag();

    if (props.roleColor)
      addRulesToStyleTag(
        styleTag,
        `.profile-details .profile-role {color:${props.roleColor}}`
      );

    if (props.nameColor)
      addRulesToStyleTag(
        styleTag,
        `.profile-details .profile-name {color:${props.nameColor}}`
      );

    if (props.disableOneCard)
      addRulesToStyleTag(styleTag, `.profile-card:hover:before {display:none}`);

    if (props.disableBackCards)
      addRulesToStyleTag(
        styleTag,
        `.profile-card:hover:before,.profile-card:hover:after {display:none}`
      );

    if (props.boxShadow)
      addRulesToStyleTag(
        styleTag,
        `.profile-card:hover:before,.profile-card:hover:after,.profile-card {box-shadow:${props.boxShadow}}`
      );

    if (props.cardBackgroundColor)
      addRulesToStyleTag(
        styleTag,
        `.profile-card:hover:before,.profile-card:hover:after,.profile-card {background:${props.cardBackgroundColor}}`
      );

    if (props.gap >= 0)
      addRulesToStyleTag(
        styleTag,
        `.profile-card .profile-imgBx {
            top:${props.gap}px;
            left:${props.gap}px;
            bottom:${props.gap}px;
            right:${props.gap}px;
        }.profile-details {
            left:${props.gap}px;
            bottom:${props.gap}px;
            right:${props.gap}px;
        }.profile-details h2{
            width:${(props.width ? props.width : 300) - props.gap * 2}px
        }
        `
      );
    if (props.width)
      addRulesToStyleTag(styleTag, `.profile-card{width:${props.width}px}`);

    if (props.height)
      addRulesToStyleTag(styleTag, `.profile-card{height:${props.height}px}`);
  });
  return (
    <div className="profile-card">
      <div className="profile-imgBx">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="profile-details">
        <h2 className="profile-name">{props.name ? props.name : ""}</h2>
        <h2 className="profile-role">{props.role ? props.role : ""}</h2>
      </div>
    </div>
  );
}

ProfileCard.defaultProps = {
  alt: "Image",
};

ProfileCard.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
  roleColor: PropTypes.string,
  nameColor: PropTypes.string,
  disableBackCards: PropTypes.bool,
  disableOneCard: PropTypes.bool,
  boxShadow: PropTypes.string,
  cardBackgroundColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  gap: PropTypes.number,
};

export default ProfileCard;
