import React from "react";
import "./main.css";

export default function Main() {
  const user = {
    name: "elaina journey rowan", //Your name here
    subtitle: "software developer", //Make a catchy subtitle
  };

  return (
    <div id="Main">
      <div className="main_background_img">
        <div className="main_links">
          <a href="/">home</a>
          <a href="#Projects">projects</a>
          <a href="#About">about</a>
          <a href="#Contact">contact</a>
        </div>
        <div className="main_text">
          <h1>{user.name}</h1>
          <h2>{user.subtitle}</h2>
        </div>
      </div>
    </div>
  );
}
