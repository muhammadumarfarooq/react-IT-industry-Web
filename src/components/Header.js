import React from "react";
import ButtonOutline from "./common/ButtonOutline";
import Button from "./common/Button";
import Fade from "react-reveal/Fade";
import headerImg from "../assets/main.png";

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='row'>
          <Fade bottom cascade>
            <div className='col-md-5 header-text-box'>
              <h1>
                Welcome next level cryptocurrency token with faster transfer
              </h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                eiusmod tempor incididunt labore dolore magna ipsum dolor sit
                amet consectetur.
              </p>
              <div>
                <Button text='GET TOKEN' />
                <ButtonOutline text='WHITE PAPER' />
              </div>
            </div>
          </Fade>
          <div className='col-md-7'>
            <img style={{ width: "100%" }} src={headerImg} alt='header-img' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
