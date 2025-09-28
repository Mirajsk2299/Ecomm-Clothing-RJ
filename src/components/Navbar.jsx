import React, { useContext } from "react";
import { Link } from "react-router-dom";
import redlogo from "../assets/redlogo.jpg";
import "../Styles/Navbar.css";
import { CartContext } from "../context/CartContext.jsx";

const Navbar = ({ search, setSearch }) => {
  const { cartCount } = useContext(CartContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-2">
        <div className="container-fluid">
          {/* Brand */}
          <div className="navBrand-div d-flex align-items-center me-2 ms-5">
            <Link className="navbar-brand" to="/">
              E-Comm
            </Link>
            <img
              src={redlogo}
              alt="logo loading..."
              className="nav-logo"
              style={{ width: "40px", height: "40px", borderRadius: "25px" }}
            />
          </div>

          {/* Toggler (mobile menu button) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible menu */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3 border border-dark rounded text-nowrap">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              {/* Wishlist link */}
              <li className="nav-item me-3 border border-dark rounded text-nowrap">
                <Link className="nav-link" to="/wishlist">
                  Wishlist{" "}
                  <span
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: "50%",
                      padding: "3px 7px",
                      fontSize: "0.8rem",
                      marginLeft: "5px",
                    }}
                  ></span>
                </Link>
              </li>

              {/* Cart link */}
              <li className="nav-item me-3 border border-dark rounded text-nowrap">
                <Link className="nav-link" to="/cart">
                  Cart 🛒
                  <span
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: "50%",
                      padding: "3px 7px",
                      fontSize: "0.8rem",
                      marginLeft: "5px",
                    }}
                  >
                    {cartCount}
                  </span>
                </Link>
              </li>

              <li className="nav-item me-3 border border-dark rounded text-nowrap">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Login button */}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <div
                className="login-btn me-3"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "4px",
                  width: "70px",
                  justifyContent: "center",
                  display: "flex",
                  borderRadius: "10px",
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <h6>Login</h6>
              </div>
            </Link>

            {/* Search form */}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Products..."
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
