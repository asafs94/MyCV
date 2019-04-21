import React from "react";

export default function Rectangle(props) {
  return (
    <svg viewBox="0 0 106 106" style={props.style}>
      <path fill={props.color}
        d=" M 53,3
            L 103,53
            L 53,103
            L 3,53 
            Z"
      />
    </svg>
  );
}
