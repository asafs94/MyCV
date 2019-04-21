import React, { Component } from "react";
import { animated as a } from "react-spring";
import { Spring } from "react-spring/renderprops";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleNav = () => {
    this.setState(state => {
      return {
        open: !state.open
      };
    });
    console.log(this.state);
  };


  

  render() {
    const links = this.props.links.map(link => (
      <li key={link.name + "id"} onClick={()=>this.props.scrollToPage(link.y)}>{link.name}</li>
    ));

    const toggle = this.state.open;
    return (
      <nav >
        <a.svg onClick={this.toggleNav}
          viewBox="0 0 100 100"
          style={{ filter: "drop-shadow(16px 16px 10px rgba(0,0,0,0.9))" }}
        >
          <a.path
            style={{ fill: "#474747" }}
            d=" M 50 0
                  L 100 50
                  L 50 100
                  L 0 50
                  Z"
          />
          <Spring from={{ opacity: 0 }}
          to={{
            opacity: toggle ? 1 : 0,
            transform: toggle ? "scale(1)" : "scale(0)"
          }} >
          { style=>
          <circle
            cy="50"
            cx="50"
            r="37.5"
            style={{ fill: "transparent", stroke: "#ffcc02", strokeWidth: 5, ...style }}
          />
        }
          </Spring>

          <Spring from={{ opacity: 1 }}
          to={{
            opacity: toggle ? 1 : 0,
            y1: toggle? 60: 40
          }} >
          {({opacity,y1}) =>
          <line
            className="line1"
            x1="30"
            y1={y1}
            x2="70"
            y2="40"
            style={{ stroke: "#eaeaea", strokeWidth: 5 }}
          />}
          </Spring>
          
          <Spring from={{ opacity: 1 }}
          to={{
            opacity: toggle ? 0 : 1,
            x1: toggle? 50: 30,
            x2: toggle? 50: 70,
          }} >
          {({opacity,x1,x2}) =>
          <line
          className="line2"
          x1={x1}
          y1="50"
          x2={x2}
          y2="50"
            style={{ opacity: opacity, stroke: "#eaeaea", strokeWidth: 5 }}
          />}
          </Spring>
          <Spring from={{ opacity: 1 }}
          to={{
            y1: toggle? 40: 60,
          }} >
          {({y1}) =>
          <line
            className="line3"
            x1="30"
            y1={y1}
            x2="70"
            y2="60"
            style={{ stroke: "#eaeaea", strokeWidth: 5 }}
          />}
          </Spring>
          
        </a.svg>
        <Spring
          from={{ opacity: 0 }}
          to={{
            opacity: toggle ? 1 : 0,
            transform: toggle ? "scaleY(1) translateY(0)" : "scaleY(0) translateY(-100%)"
          }}
        >
          {({ ...props }) => (
            <ul style={{ ...props }} className="vertical">
              {links}
            </ul>
          )}
        </Spring>
      </nav>
    );
  }
}
