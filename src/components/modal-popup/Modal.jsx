import React from "react";
import "./index.css";

const Modal = ({ isOpen, onClose }) => {

  const handleClose = (e) => {
    onClose();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? "visible" : ""}`}
      onClick={handleClose}
    >
      <div className="modal" onClick={handleModalClick}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </div>
    </div>
  );
};

export default Modal;
