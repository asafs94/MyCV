import React from "react";
import Circle from "./svgs/circle";
import Flag from "./svgs/flag";
import Courses from "./courses";
import {useSpring, animated as a} from 'react-spring'; 

export default function Education(props) {
  const circleStyle = { width: "7.5%" };
  const education= props.data;
  const toggleData = props.showEducation;
  const {opacity, background, height,color, circleTransform}= useSpring({
    opacity: toggleData? 1 : 0,
    background: toggleData? "#474747": "white",
    height: toggleData? "100%": "0%",
    color: toggleData? "#ffcc02": "#474747",
    circleTransform: toggleData? 1: 0
  })


  return (


    <a.div id="education" style={{background: background}} className="full-page">
      <a.div style={{ height: height}} className="bg">
        <Flag id="" />
      </a.div>
      <a.h1 style={{color: color}}>
        Education
        <a.span style={{transform: circleTransform.interpolate(c => `scale(${c})`)}}>
          <Circle style={circleStyle} />
        </a.span>
      </a.h1>
      <a.div style={{opacity: opacity}} className="page-content">
          <div id="main-ed">
            <h2>{education.name}</h2>
            <h3>{education.city}, {education.country}</h3>
            <h3>
              {education.startYear}-{education.endYear}
            </h3>
            <h4>{education.summary}</h4>
          </div>
        <Courses data={props.courses}></Courses>
      </a.div>
    </a.div>
  );
}
