import React from "react";

const Register = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        backgroundColor: "#f5f5f5",
        padding: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "2rem 3rem",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Create Account
        </h2>

        <form
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
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

          {/* Password Field */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
              Password:
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              style={{
                padding: "0.5rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
                width: "100%",
              }}
            />
          </div>

          {/* Create Account Button */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="submit"
              style={{
                padding: "0.75rem 2rem",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
            >
              Create Account
            </button>
          </div>
        </form>

        {/* Optional Login Link */}
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
