import React from "react";
import { Link } from "gatsby";

// Images
import LinkIcon from "../../../assets/icons/link.svg";

// Styles
import "./styles.scss";

const List = ({ title, slug, className }) => {
  return (
    <Link className={`list ${className}`} to={slug}>
      <img src={LinkIcon} alt={title} className="list-icon" />
      <p className="list-title">{title}</p>
    </Link>
  );
};

export default List;
