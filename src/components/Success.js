import React from "react";
import { Link } from "react-router-dom";
import "./Success.css";

const Success = () => {
  return (
    <div className="success-container">
      <div className="success-box">
        <h1>🎉 Registration Successful!</h1>
        <p>You have successfully registered for the tournament.</p>

        <Link to="/" className="success-btn">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
