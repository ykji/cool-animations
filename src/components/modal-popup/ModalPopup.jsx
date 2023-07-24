import "./index.css";
import Modal from "./Modal";
import { useState } from "react";
import AnimationDetails from "../AnimationDetails";

const ModalPopup = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <AnimationDetails
        name="Modal Popup"
        desc="A modal popup box that smoothly fades in when triggered and fades out when closed. The background content is appropriately dimmed when the modal is active."
      />
      <h1>{"<Website Content>"}</h1>
      <button style={{ padding: "16px" }} onClick={handleModalOpen}>
        Open Modal
      </button>
      <Modal isOpen={modalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default ModalPopup;
