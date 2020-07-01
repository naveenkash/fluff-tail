import React, { Component } from "react";
import "./style.scss";
import PropTypes from "prop-types";
export default class ParallaxDepth extends Component {
  static defaultProps = {
    translateX: 40,
    translateY: 40,
    rotateX: 30,
    rotateY: 30,
  };
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null,
    };
    this.ParallaxCardRef = React.createRef();
  }
  componentDidMount() {
    this.setState({
      width: this.ParallaxCardRef.current.offsetWidth,
      height: this.ParallaxCardRef.current.offsetHeight,
    });
  }
  mousePX = () => {
    return this.state.mouseX / this.state.width;
  };
  mousePY = () => {
    return this.state.mouseY / this.state.height;
  };
  cardBgTransform = () => {
    const tX = this.mousePX() * -this.props.translateX;
    const tY = this.mousePY() * -this.props.translateY;
    return `translateX(${tX}px) translateY(${tY}px)`;
  };
  cardBgImage = () => {
    return `url(${this.props.image})`;
  };
  cardStyle = () => {
    const rX = this.mousePX() * this.props.rotateX;
    const rY = this.mousePY() * -this.props.rotateY;
    return `rotateY(${rX}deg) rotateX(${rY}deg)`;
  };
  handleMouseMove = (e) => {
    this.setState({
      mouseX:
        e.pageX -
        this.ParallaxCardRef.current.offsetLeft -
        this.state.width / 2,
      mouseY:
        e.pageY -
        this.ParallaxCardRef.current.offsetTop -
        this.state.height / 2,
    });
  };
  handleMouseEnter = () => {
    clearTimeout(this.mouseLeaveDelay);
  };
  handleMouseLeave = () => {
    this.setState({
      mouseLeaveDelay: setTimeout(() => {
        this.setState({ mouseX: 0, mouseY: 0 });
      }, 1000),
    });
  };

  render() {
    return (
      <div
        className="parallax-card-wrap"
        style={{
          "--parallax-box-shadow-color": this.props.boxShadowColor,
          "--parallax-border-inside-color": this.props.insideBorderColor,
          "--parallax-border-color": this.props.borderColor,
          width: `${this.props.width}px`,
          height: `${this.props.height}px`,
        }}
        onMouseMove={(e) => this.handleMouseMove(e)}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        ref={this.ParallaxCardRef}
      >
        <div className="parallax-card" style={{ transform: this.cardStyle() }}>
          <div
            className="parallax-card-bg"
            style={{
              transform: this.cardBgTransform(),
              backgroundImage: this.cardBgImage(),
            }}
          ></div>
          <div className="parallax-card-info">
            <h1>{this.props.title ? this.props.title : ""}</h1>
            <p>{this.props.desc ? this.props.desc : ""}</p>
          </div>
        </div>
      </div>
    );
  }
}

ParallaxDepth.propTypes = {
  translateX: PropTypes.number,
  translateY: PropTypes.number,
  rotateX: PropTypes.number,
  rotateY: PropTypes.number,
  boxShadowColor: PropTypes.string,
  insideBorderColor: PropTypes.string,
  borderColor: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  desc: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
