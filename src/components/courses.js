import React, { useState, useCallback } from "react";
import { useTransition, animated as a } from "react-spring";

export default function Courses(props) {
  const courses = props.data;
  courses.sort((a, b) => {
    return a.orderInt - b.orderInt;
  });

  const [courseIndex, set] = useState(0);
  const forward = useCallback(
    () => set(state => (state + 1) % courses.length),
    []
  );
  const back = useCallback(
    () => set(state => (state === 0 ? courses.length - 1 : state - 1)),
    []
  );

  const transitions = useTransition(courseIndex, c => c, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  return (
    <div id="second-ed">
      <h3 className="center-text">Courses</h3>
      <ul>
        <span onClick={back}>
        <svg viewBox="-20 0 50 100">
            <polyline
              points="20,0
                              0,50
                              20,100"
            />
          </svg>
        </span>
        {transitions.map(({ item, props, key }) => {
          const course = courses[item];
          return (
            <a.li key={key} style={props}>
              <h3>{course.title}</h3>
              <h4>
                {course.startYear}-{course.endYear}
              </h4>
              <h5>{course.subtitle}</h5>
            </a.li>
          );
        })}
        <span onClick={forward}>
        <svg viewBox="-20 0 50 100">
            <polyline
              points="0,0
                              20,50
                              0,100"
            />
          </svg>
        </span>
      </ul>
    </div>
  );
}
