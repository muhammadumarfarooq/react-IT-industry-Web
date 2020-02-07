import React, { useState, Fragment } from "react";

const HamburgerMobile = ({ isShowColor }) => {
  const [active, setActive] = useState(false);

  const mobileNavClass = active
    ? "mobile-navigation mobile-navigation-active"
    : "mobile-navigation";

  return (
    <Fragment>
      <button
        onClick={() => setActive(!active)}
        className={`hamburger hamburger--collapse ${active ? "is-active" : ""}`}
        type='button'
      >
        <span className='hamburger-box'>
          <span
            className={`hamburger-inner ${
              isShowColor ? "black-bg" : "white-bg"
            }`}
          ></span>
        </span>
      </button>

      <div className={mobileNavClass}></div>
    </Fragment>
  );
};

export default HamburgerMobile;
