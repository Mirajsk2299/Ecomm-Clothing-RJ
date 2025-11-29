import React from "react";
import { Products } from "../Data/Products.js";
import Addbutton from "./Addcartbtn.jsx";
import Detailsbtn from "./Detailsbtn.jsx"; 

const Home = ({ search }) => {
  const filteredProducts = Products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-page" style={{ padding: "0.5%" }}>
      <h2 className="ms-5">Featured Products</h2>

      <div className="card-div container mt-4">
        <div className="row g-3 justify-content-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 me-4"
                style={{
                  width: "18em",
                  height: "auto",
                  borderRadius: "15px",
                  padding: "0.5%",
                  border: "1px solid grey",
                }}
              >
                <div
                  className="crd-img mb-1"
                  style={{
                    height: "12em",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#f9f9f9",
                    borderRadius: "5px",
                  }}
                >
                  <img
                    src={product.image}
                    alt="Loading..."
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                  />
                </div>

                <div className="card-body mt-2">
                  <h5 className="mb-2">{product.name}</h5>
                  <p className="mb-1">{product.category}</p>
                  <p className="mb-2">₹ {product.price}</p>
                </div>

                <div
                  className="card-buttons p-1 d-flex gap-3"
                  style={{
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    height: "auto",
                    flexDirection: "coloumn",
                  }}
                >
                  <Detailsbtn productId={product.id} />
                  <Addbutton product={product} />
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
