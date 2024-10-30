// src/components/Modal.js
import React from "react";

const Modal = ({ show, onClose, image, audio }) => {
  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column", // Added to align items vertically
          alignItems: "center",
          width: "300px", // Added for consistent width
        }}
      >
        <img
          src={image}
          alt="Modal Content"
          style={{ width: "100%", maxWidth: "250px", marginBottom: "15px" }}
        />
        <audio
          controls
          style={{ width: "100%", maxWidth: "250px", marginBottom: "15px" }}
        >
          <source src={audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <button
          onClick={onClose}
          style={{
            marginTop: "10px",
            padding: "8px 16px",
            backgroundColor: "pink",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
