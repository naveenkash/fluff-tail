import React from "react";
import "./style.scss";
import PropTypes from "prop-types";
import { createStyleTag, addRulesToStyleTag } from "../../helper-functions";

class ProfileCard extends React.Component {
  static defaultprops = {
    alt: "Image",
  };
  componentDidMount() {
    let styleTag = createStyleTag();

    if (this.props.roleColor)
      addRulesToStyleTag(
        styleTag,
        `.profile-details .profile-role {color:${this.props.roleColor}}`
      );

    if (this.props.nameColor)
      addRulesToStyleTag(
        styleTag,
        `.profile-details .profile-name {color:${this.props.nameColor}}`
      );

    if (this.props.disableOneCard)
      addRulesToStyleTag(styleTag, `.profile-card:hover:before {display:none}`);

    if (this.props.disableBackCards)
      addRulesToStyleTag(
        styleTag,
        `.profile-card:hover:before,.profile-card:hover:after {display:none}`
      );

    if (this.props.boxShadow)
      addRulesToStyleTag(
        styleTag,
        `.profile-card:hover:before,.profile-card:hover:after,.profile-card {box-shadow:${this.props.boxShadow}}`
      );

    if (this.props.cardBackgroundColor)
      addRulesToStyleTag(
        styleTag,
        `.profile-card:hover:before,.profile-card:hover:after,.profile-card {background:${this.props.cardBackgroundColor}}`
      );

    if (this.props.gap >= 0)
      addRulesToStyleTag(
        styleTag,
        `.profile-card .profile-imgBx {
            top:${this.props.gap}px;
            left:${this.props.gap}px;
            bottom:${this.props.gap}px;
            right:${this.props.gap}px;
        }.profile-details {
            left:${this.props.gap}px;
            bottom:${this.props.gap}px;
            right:${this.props.gap}px;
        }.profile-details h2{
            width:${
              (this.props.width ? this.props.width : 300) - this.props.gap * 2
            }px
        }
        `
      );
    if (this.props.width)
      addRulesToStyleTag(
        styleTag,
        `.profile-card{width:${this.props.width}px}`
      );

    if (this.props.height)
      addRulesToStyleTag(
        styleTag,
        `.profile-card{height:${this.props.height}px}`
      );
  }
  render() {
    return (
      <div className="profile-card">
        <div className="profile-imgBx">
          <img src={this.props.image} alt={this.props.alt} />
        </div>
        <div className="profile-details">
          <h2 className="profile-name">
            {this.props.name ? this.props.name : ""}
          </h2>
          <h2 className="profile-role">
            {this.props.role ? this.props.role : ""}
          </h2>
        </div>
      </div>
    );
  }
}

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
