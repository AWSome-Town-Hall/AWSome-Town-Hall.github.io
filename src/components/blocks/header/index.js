import React from "react";
import { Link } from "gatsby";

// Mocks
import { HeaderLinks } from "../../../mocks/links";

// Styles
import "./header.scss";

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="headerContainer">
          <Link to="/">
            <h2 className="logoBox_text" aria-readonly>
              <span style={{ color: "#ec912d" }}>AWS</span>ome TownHall
            </h2>
          </Link>

          <div className="header_menuLinksBox">
            {HeaderLinks?.map((link) => (
              <Link className="menuLinksBox_eachLink" to={link.url}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Accounement ribbon */}
      <div className="anncRibbon">
        <div className="anncRibbon_contentBox">
          <h3 className="contentBox_text">
            Learn AWS with the experts.{" "}
            <Link to="/">
              <span className="clickableText">
                Become a member of our community!
              </span>
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Header;
