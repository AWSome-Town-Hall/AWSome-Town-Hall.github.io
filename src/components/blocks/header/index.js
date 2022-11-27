import React from "react";
import { Link } from "gatsby";

// Mocks
import { HeaderLinks } from "../../../mocks/links";

// Images
import Logo from "../../../images/logo.svg";

// Styles
import "./header.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="header_logoBox">
          <img
            src={Logo}
            style={{ width: "100%", height: "100%" }}
            alt="AWSome Town Hall - Logo"
          />
        </div>
        <div className="header_menuLinksBox">
          {HeaderLinks?.map((link) => (
            <Link className="menuLinksBox_eachLink" to={link.url}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
