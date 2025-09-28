import "./App.css";
import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import { Products } from "./Data/Products.js";
import Productdetails from "./pages/Productdetails";

import Cart from "./pages/Cart";

function App() {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Navbar search={search} setSearch={setSearch} />

        <main className="flex-fill">
          <Routes>
            <Route path="/" element={<Home search={search} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product/:id" element={<Productdetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
