import React from "react";

export default function Contact(props) {
  const user = props.user;

  return (
    <div id="contact">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="bg">
        <path
          id="color-path"
          d="
      M 30 100
      L 50 50
      L 70 100
      Z"
        />
      </svg>

      <h1>Contact Me</h1>
      <ul>
        <li>
          Phone Number<span>{user.phoneNumber}</span>
        </li>
        <li>
          Email<span>{user.email}</span>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href={user.facebook}>
            Facebook
          </a>
          <span>Click to open</span>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href={user.instagram}>
            Instagram
          </a>{" "}
          <span>Click to open</span>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href={user.linkedIn}>
            LinkedIn
          </a>{" "}
          <span>Click to open</span>
        </li>
      </ul>
    </div>
  );
}
