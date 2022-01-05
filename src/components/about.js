import React from "react";
import "./about.css";
import profile from "../photos/profile.jpg";

export default function About() {
  const userInfo = {
    profile_pic: profile, //use a square formatted image
    bio: "Elaina is a motivated individual who has passion for technology. They have always had an interest in technology going all the way back to the time they took apart the family Packard Bell computer to see how it worked. Once they hit high school they started to dabble with coding, and they have been hooked ever since. They have put themself through several coding bootcamps including most recently Bloom Institute of Technology. In their time at BloomTech, they took on a job as a team lead. In their role they were responsible for leading their students through a JavaScript focused curriculum. This curriculum included JavaScript, Html, CSS, and React on the frontend and Node, Express, and Postgres on the backend.  Their favorite thing about being a team lead was connecting with students helping them overcome challenges and seeing them succeed and accomplish their goals. Elaina is currently located in Kansas City but is willing to relocate if needed",
  };

  return (
    <div id="About">
      <h3 className="section_title">- about -</h3>
      <div className="txt_wrapper">
        <img src={userInfo.profile_pic} alt="this is me!" />
        <p className="bio">{userInfo.bio}</p>
      </div>
    </div>
  );
}
