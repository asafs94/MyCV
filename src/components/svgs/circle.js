import React from "react";

export default function Circle(props) {
  return (
    <svg viewBox="0 0 100 100" width="100%">
      <circle fill={props.color} cx="50" cy="50" r="49"/>
    </svg>
  );
}
