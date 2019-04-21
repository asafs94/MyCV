import React from "react";

export default function Loading() {
  return (
    <div id="main-loading">
      <svg viewBox="0 0 100 100">
      <path d=" M 0 50
                L 50 0
                L 100 50
                L 50 100
                Z" />
      </svg>
      <h1>Loading...</h1>
    </div>
  );
}
