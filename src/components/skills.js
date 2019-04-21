import React from "react";
import Rectangle from "./svgs/rectangle";
import { useTrail, animated, useSpring } from "react-spring";

export default function Skills(props) {
  const skills = props.data;
  skills.sort((a, b) => {
    return b.level - a.level;
  }); //Sort array by level
  
  const mainSkills = skills.slice(0, 5);
  const moreSkills = skills.slice(5, skills.length).map(skill => skill.name);

  const showMoreSkills = () => {
    let skillsToShow = [];
    for (let i = 0; i < moreSkills.length - 1; i++) {
      skillsToShow.push(moreSkills[i] + ", ");
    }
    skillsToShow.push(moreSkills[moreSkills.length - 1]);
    return skillsToShow;
  };

  const toggleSkills = props.showSkills;

  const trail = useTrail(mainSkills.length, {
    opacity: toggleSkills ? 1 : 0,
    w: toggleSkills ? 1 : 0
  });

  const {opacity,scale} = useSpring({
    opacity: toggleSkills? 1: 0,
    scale: toggleSkills? 1: 0 
  })

  return (
    <div id="skills" className="full-page">
      <animated.h1 style={{transform: scale.interpolate(x=>`scale(${x})`)}}>
        <span>
          <span className="rect">
            <Rectangle />
          </span>
          Technical
          <span className="rect">
            <Rectangle />
          </span>
        </span>
        <br />
        Skills
        <div className="rect">
          <Rectangle />
        </div>
      </animated.h1>
      <ul id="skillList">
        {trail.map(({ opacity, w }, index) => (
          <animated.li
            key={index + "skill"}
            className="skillObject"
            style={{ opacity: opacity }}
          >
            <h2>{skills[index].name}</h2>
            <animated.div>
              <animated.div
                style={{
                  width: w.interpolate(w => `${skills[index].level * 10 * w}%`)
                }}
              />
            </animated.div>
          </animated.li>
        ))}
        <animated.div style={{opacity: opacity}} id="more-skills">
          <h4>More Skills</h4>
          <p>{showMoreSkills()}...</p>
        </animated.div>
      </ul>
    </div>
  );
}
