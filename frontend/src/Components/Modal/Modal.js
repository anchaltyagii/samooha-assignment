import React from "react";
import "./Modal.scss";

const Modal = (props) => {
  const { children } = props;
  return (
    <div className="modal-overlay">
      <div className="modal">{children}</div>
    </div>
  );
};

export default Modal;
