import React from "react";

// Components
import List from "../../elements/list";

// Styles
import "./styles.scss";

const Modal = ({ title, data, closeModal }) => {
  return (
    <>
      <div className="backdrop" onClick={closeModal} />
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-headerText">{title}</h3>
        </div>
        <div className="modal-body">
          {data.map((list) => (
            <List
              title={list.frontmatter.lesson}
              slug={list.frontmatter.slug}
              className="modal-list-item"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Modal;
