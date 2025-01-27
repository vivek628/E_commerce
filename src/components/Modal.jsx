import React from "react";

const Modal = ({ productData, onClose }) => {
    console.log(productData.images[0])
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "flex-end", 
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "30%",
          height: "100%",
          padding: "20px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          &times;
        </button>
        <div style={{ marginTop: "20px" }}>
          {/* Render product details here */}
            <img
                src={productData.images[0]}
                alt={productData.name}
                style={{ width: "100%" }}></img>
          <h2>{productData.name}</h2>
          <p>{productData.description}</p>
          <p>Price: ${productData.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;