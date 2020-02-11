import React from "react";
import logoWhite from "../../../assets/logo-white.png";
import logoDark from "../../../assets/logo-dark.png";

const Logo = ({ isShowColor }) => {
  return (
    <a href='#home'>
      <img
        className='logo'
        src={isShowColor ? logoDark : logoWhite}
        alt='Logo'
      />
    </a>
  );
};

export default Logo;
