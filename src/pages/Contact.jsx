import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        backgroundColor: "#f5f5f5",
        padding: "2rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "2rem 3rem",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Contact Us
        </h1>

        <form
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {/* Name Field */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
              Your Name:
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              style={{
                padding: "0.5rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
                width: "100%",
              }}
            />
          </div>

          {/* Email Field */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: "0.5rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
                width: "100%",
              }}
            />
          </div>

          {/* Message Field */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
              Message:
            </label>
            <textarea
              placeholder="Write your message"
              style={{
                padding: "0.5rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
                width: "100%",
                resize: "vertical",
                minHeight: "100px",
              }}
            />
          </div>

          {/* Submit Button */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="submit"
              style={{
                padding: "0.75rem 2rem",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
