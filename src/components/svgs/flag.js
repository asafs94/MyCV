import React from "react";

export default function Flag(props) {
  return (
    <svg viewBox="-5 0 105 105" preserveAspectRatio="none">
      <defs>
        <filter id="dropshadow" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="40" />{" "}
          {/*<!-- stdDeviation is how much to blur -->*/}
          <feOffset dx="0" dy="0" result="offsetblur" />{" "}
          {/*<!-- how much to offset -->*/}
          <feComponentTransfer>
            <feFuncA type="linear" slope="1" />
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
        d=" M 0,0
            L 0,100
            L 50,66.67
            L 100,100
            L 100,0
            Z"
      />
    </svg>
  );
}
