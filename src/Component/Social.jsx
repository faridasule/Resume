import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
const Social = () => {
  const style = {
    width: " 2rem",
    height: "1.2rem",
    animation: "animated-icon 3s infinite ease-in-out",
  };
  return (
    <div className="socials">
      <a href="" className="social-icon">
        <BsGithub style={style} />
      </a>
      <a href="" className="social-icon">
        <BsLinkedin style={style} />
      </a>
      <a href="" className="social-icon">
        <BsTwitter style={style} />
      </a>
    </div>
  );
};

export default Social;
