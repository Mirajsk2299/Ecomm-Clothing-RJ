import React from "react";
import { useParams } from "react-router-dom";
import { Products } from "../Data/Products.js";

import Addbutton from "../components/Addcartbtn.jsx";

const ProductDetails = () => {
  const { id } = useParams();
  const selectedProduct = Products.find(
    (product) => product.id === parseInt(id)
  );

  if (!selectedProduct)
    return (
      <p style={{ textAlign: "center", marginTop: "2rem" }}>
        Product not found!
      </p>
    );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "2rem",
        backgroundColor: "#f5f5f5",
        minHeight: "90vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          maxWidth: "900px",
          width: "100%",
          gap: "2rem",
          flexWrap: "wrap", 
        }}
      >
        
        <div
          style={{
            flex: "1 1 300px", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </div>

        
        <div
          style={{
            flex: "1 1 300px", 
            display: "flex",
            flexDirection: "column",
            gap: "1rem",

            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <h2 style={{ margin: "0" }}>{selectedProduct.name}</h2>
          <p style={{ margin: "0", fontWeight: "bold" }}>
            Category:{" "}
            <span style={{ fontWeight: "normal" }}>
              {selectedProduct.category}
            </span>
          </p>
          <p style={{ margin: "0.5rem 0" }}>{selectedProduct.description}</p>
          <p style={{ margin: "0", fontSize: "1.2rem", fontWeight: "bold" }}>
            Price: ₹ {selectedProduct.price}
          </p>

          
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "1rem",
              alignItems: "center",
            }}
          >
            <Addbutton product={selectedProduct} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
