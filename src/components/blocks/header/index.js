import React from "react";
import { Link } from "gatsby";

// Styles
import "./styles.scss";

const Header = () => {
  const link = [
    {
      name: "Join the community",
      url: "/",
    },
  ];

  return (
    <>
      <div className="header-wrapper">
        <div className="header-container">
          <Link to="/">
            <h2 className="header_logoText" aria-readonly>
              <span style={{ color: "#d37a19" }}>AWS</span>ome TownHall
            </h2>
          </Link>

          <div className="header_menu">
            {link?.map((link, index) => (
              <Link className="header_menuLink" to={link.url} key={index}>
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
