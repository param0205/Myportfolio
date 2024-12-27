import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";
const Footer = () => {
  return (
    <div className="bg-rose-500 h-[200px] flex justify-center">
      <div>
        <SocialMediaIcons />
        <p><span><i class="material-icons"></i>
        </span>Electronic City,Bangalore</p>
      </div>
    </div>
  );
};

export default Footer;
