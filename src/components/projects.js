import React, { useState, useCallback } from "react";
import { useTransition, useSpring, animated as a } from "react-spring";

export default function Projects(props) {
  const [projectIndex, set] = useState(0);
  const projects = props.projects;

  const transitions = useTransition(projectIndex, p => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)",position:"absolute" }
  });

  const toggle = props.showProjects;

  const { y, opacity, ...rest } = useSpring({
    width: toggle ? "70%" : "0%",
    height: toggle ? "50%" : "0%",
    y: toggle ? 0 : 25,
    opacity: toggle ? 1 : 0
  });

  const forward = useCallback(
    () => set(state => (state + 1) % projects.length),
    []
  );
  const back = useCallback(
    () => set(state => (state === 0 ? projects.length - 1 : state - 1)),
    []
  );

  return (
    <div id="projects" className="full-page">
      <a.div className="page-title" style={{ opacity: opacity }}>
        <h1>My</h1>
        <h1>Projects</h1>
      </a.div>

      <a.div
        style={{ ...rest, transform: y.interpolate(y => `translateY(${y}vh)`) }}
        className="page-content"
      >
        <div className="back" onClick={back}>
          <svg viewBox="-20 0 50 100">
            <polyline
              points="20,0
                              0,50
                              20,100"
            />
          </svg>
        </div>
        <a.ul id="projects-list" style={{ opacity: opacity }}>
          {transitions.map(({ item, props, key }) => {
            const project = projects[item];
            return (
              <a.li key={key} style={props}>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
            {project.id!==11? <button><a href={project.link} target="_blank" rel="noopener noreferrer">Enter</a></button>: <button className="disabled">Current Project</button>}
              </a.li>
            );
          })}
        </a.ul>
        <div className="forward" onClick={forward}>
          <svg viewBox="-20 0 50 100">
            <polyline
              points="0,0
                              20,50
                              0,100"
            />
          </svg>
        </div>
      </a.div>
    </div>
  );
}
