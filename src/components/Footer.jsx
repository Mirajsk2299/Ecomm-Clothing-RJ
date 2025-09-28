import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-3 mt-0">
      <div className="container text-center">
        <p className="mb-1">{currentYear} E-Comm. All rights reserved.</p>
        <div>
          <a href=" " className="text-white me-3">
            Privacy Policy
          </a>
          <a href=" " className="text-white">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
