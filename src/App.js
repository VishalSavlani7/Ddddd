// src/App.js
import React, { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ image: "", audio: "" });

  const handleButtonClick = (index) => {
    setModalContent({
      image: require(`./images/image${index + 1}.jpg`),
      audio: require(`./audio/audio${index + 1}.mpeg`),
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent({ image: "", audio: "" });
  };

  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "50px",
        backgroundColor: "#c0c0ff",
        height: "55rem",
      }}
    >
      <h1 style={{ fontFamily: "cursive", letterSpacing: "2px" }}>
        For You Ddddd
      </h1>
      <div>
        {Array.from({ length: 10 }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            style={{
              margin: "5px",
              padding: "10px 20px",
              backgroundColor: "pink",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <Modal
        show={showModal}
        onClose={closeModal}
        image={modalContent.image}
        audio={modalContent.audio}
      />
    </div>
  );
};

export default App;
