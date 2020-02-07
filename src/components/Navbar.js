import React, { useState } from "react";
import logoWhite from "../assets/logo-white.png";
import logoDark from "../assets/logo-dark.png";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isShowColor, setIsShowColor] = useState(false);

  const hideLinks = showSearch ? "links hide" : "links";
  const formClass = showSearch
    ? "nav-search-form show show-form"
    : "nav-search-form";
  const navBarStyle = isShowColor ? "navbar color-white" : "navbar";
  const navbarLinkStyle = isShowColor
    ? "navbar-link-black"
    : "navbar-link-white";

  const handleSearch = () => {
    setShowSearch(!showSearch);
  };

  window.addEventListener("scroll", function(e) {
    if (window.scrollY > 80) setIsShowColor(true);
    else setIsShowColor(false);
  });

  return (
    <nav className={navBarStyle}>
      <div className='container'>
        <div className='navbar-wraper'>
          <a href='#home'>
            <img
              className='logo'
              src={isShowColor ? logoDark : logoWhite}
              alt='Logo'
            />
          </a>
          <div className='links-wraper'>
            <ul className={hideLinks}>
              <li className='is-current'>
                <a className={navbarLinkStyle} href='#home'>
                  Home
                </a>
              </li>
              <li className=''>
                <a className={navbarLinkStyle} href='#key-features'>
                  Key Features
                </a>
              </li>
              <li className=''>
                <a className={navbarLinkStyle} href='#fund'>
                  Fund Raising
                </a>
              </li>
              <li className=''>
                <a className={navbarLinkStyle} href='#map'>
                  Locations
                </a>
              </li>
              <li className=''>
                <a className={navbarLinkStyle} href='#faqSection'>
                  FAQ
                </a>
              </li>
            </ul>

            <div className='nav-search'>
              <form className={formClass}>
                <input
                  type='text'
                  className='form-control'
                  id='inlineFormInput'
                  placeholder='Jane Doe'
                />
                <i className='fa fa-search'></i>
              </form>

              <i
                onClick={handleSearch}
                className={`fa fa-${
                  showSearch ? "times" : "search"
                } searching-icon`}
                style={{ color: isShowColor ? "#000" : "#fff" }}
              ></i>
            </div>

            <button>Try for Free</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
