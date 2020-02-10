import React, { useState, Fragment } from "react";

const HamburgerMobile = ({ isShowColor, links }) => {
  const [active, setActive] = useState(true);

  const mobileNavClass = active
    ? "mobile-navigation mobile-navigation-active"
    : "mobile-navigation";

  return (
    <div className='hide-on-big-screen'>
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

      <div className={mobileNavClass}>
        <div className='mob-link-wrap container'>
          <ul className='mob-menu'>
            {links.map(link => (
              <li>
                <a href={link.path}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMobile;
