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
      <a href="https://github.com/faridasule" className="social-icon">
        <BsGithub style={style} />
      </a>
      <a href="https://www.linkedin.com/in/farida-sule-046201240/" className="social-icon">
        <BsLinkedin style={style} />
      </a>
      <a href="https://twitter.com/Reedsule" className="social-icon">
        <BsTwitter style={style} />
      </a>
    </div>
  );
};

export default Social;
