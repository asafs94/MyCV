import React from "react";
import Rectangle from "./svgs/rectangle";

export default function Header(props) {
  const user = props.data;
  const rectStyle = { height: "40%" };



  return (
    <div id="header" className="full-page">
      <svg id="header-bg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <filter id="dropshadow" height="130%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" />{" "}
            {/*<!-- stdDeviation is how much to blur -->*/}
            <feOffset dx="0" dy="0" result="offsetblur" />{" "}
            {/*<!-- how much to offset -->*/}
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.1" />
              {/* <!-- slope is the opacity of the shadow -->*/}
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              {/* <!-- this contains the offset blurred image --> */}
              <feMergeNode in="SourceGraphic" />{" "}
              {/* <!-- this contains the element that the filter is applied to --> */}
            </feMerge>
          </filter>
        </defs>
        <path
          filter="url(#dropshadow)"
          d="M 60 100 l 20 -100 l 2.5 0 l -20 +100 Z"
        />
        <path
          filter="url(#dropshadow)"
          d="M 65 100 l 20 -100 l 5 0 l -20 +100 Z"
        />
      </svg>
     
          <div className="text-portion" style={props}>
            <h1>{user.firstName}</h1>
            <h2>{user.lastName}</h2>
            <div className="rect">
              <Rectangle style={rectStyle} />
            </div>
            <h3>{user.title}</h3>
          </div>
       
    </div>
  );
}
