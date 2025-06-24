// src/components/Button.jsx
import React from "react";

const Button = ({ label, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: "#00bcd4",     // Cyan
        color: "#fff",
        padding: "12px",
        border: "none",
        borderRadius: "8px",
        fontWeight: "bold",
        fontSize: "16px",
        width: "100%",
        transition: "background 0.3s",
        cursor: "pointer",
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#0097a7")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "#00bcd4")}
    >
      {label}
    </button>
  );
};

export default Button;
