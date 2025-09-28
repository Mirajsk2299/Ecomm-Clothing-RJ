import React from "react";
import { useNavigate } from "react-router-dom";

const DetailsBtn = ({ productId }) => {
  const navigate = useNavigate(); // useNavigate hook must be inside component

  return (
    <button
      style={{
        all: "unset",
        cursor: "pointer",
        border: "1px solid Black",
        padding: "3px",
        borderRadius: "8px",
        minWidth: "95px",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => navigate(`/product/${productId}`)} // use productId prop
    >
      Details
    </button>
  );
};

export default DetailsBtn;
