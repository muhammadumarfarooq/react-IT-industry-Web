import React, { useState } from "react";
import logoWhite from "../../../assets/logo-white.png";

const Footer = () => {
  const [contents] = useState([
    {
      title: "About Us",
      links: [
        { text: "Support Center", path: "#" },
        { text: "Customer Support", path: "#" },
        { text: "About Us", path: "#" },
        { text: "Copyright", path: "#" },
        { text: "Popular Campaign", path: "#" }
      ]
    },
    {
      title: "Our Information",
      links: [
        { text: "Return Policy", path: "#" },
        { text: "Privacy Policy", path: "#" },
        { text: "Terms & Conditions", path: "#" },
        { text: "Site Map", path: "#" },
        { text: "Store Hours", path: "#" }
      ]
    },
    {
      title: "My Account",
      links: [
        { text: "Press inquiries", path: "#" },
        { text: "Social media directories", path: "#" },
        { text: "Images & B-roll", path: "#" },
        { text: "Permissions", path: "#" },
        { text: "Speaker requests", path: "#" }
      ]
    },
    {
      title: "Policy",
      links: [
        { text: "Application security", path: "#" },
        { text: "Software principles", path: "#" },
        { text: "Unwanted software policy", path: "#" },
        { text: "Responsible supply chain", path: "#" }
      ]
    }
  ]);

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 mb-5'>
            <a href='#home'>
              <img src={logoWhite} className='footer-logo' alt='logo-white' />
            </a>
            <p className='detail-text secondary-color'>demo@email.com</p>
            <p className='detail-text secondary-color'>+929-443-9334</p>
          </div>
          <div className='col-md-9'>
            <div className='row'>
              {contents.map(content => (
                <div className='col-lg-3 col-md-6 mb-5'>
                  <h2 className='footer-link-title'>{content.title}</h2>

                  <ul className='footer-links'>
                    {content.links.map(link => (
                      <li>
                        <a href={link.path}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
