import React, { useState } from "react";
import HamburgerMobile from "./HamburgerMobile";
import Button from "../../Button";
import Logo from "./Logo";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isShowColor, setIsShowColor] = useState(false);

  const hideLinks = showSearch
    ? "links hide hide-on-mobile"
    : "links hide-on-mobile";

  const formClass = showSearch
    ? "nav-search-form show show-form"
    : "nav-search-form";

  const navBarStyle = isShowColor ? "navbar color-white" : "navbar";

  const navbarLinkStyle = isShowColor
    ? "navbar-link-black"
    : "navbar-link-white";

  const searchBtn = isShowColor ? "black" : "white";

  window.addEventListener("scroll", function(e) {
    if (window.scrollY > 80) setIsShowColor(true);
    else setIsShowColor(false);
  });

  const links = [
    { path: "#home", text: "Home" },
    {
      path: "#key-features",
      text: "Key Features"
    },
    {
      path: "#fund",
      text: "Fund Raising"
    },
    { path: "#map", text: "Location" },
    {
      path: "#faqSection",
      text: "FAQ"
    }
  ];

  return (
    <nav className={navBarStyle}>
      <div className='container'>
        <div className='navbar-wraper'>
          <Logo isShowColor={isShowColor} />
          <div className='links-wraper'>
            <ul className={hideLinks}>
              {links.map(link => {
                return (
                  <li>
                    <a className={navbarLinkStyle} href={link.path}>
                      {link.text}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Toggle Form */}
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
                onClick={() => setShowSearch(!showSearch)}
                className={`fa fa-${
                  showSearch ? "times" : "search"
                } searching-icon ${searchBtn}`}
                // style={{ color: isShowColor ? "#000" : "#fff" }}
              ></i>
            </div>

            <Button text='Try for Free' />

            {/* Hamburger */}
            <HamburgerMobile links={links} isShowColor={isShowColor} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
