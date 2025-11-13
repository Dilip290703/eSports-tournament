import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./bgmi_regi_style.css";
import "boxicons/css/boxicons.min.css";

const BgmiRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    gameId: "",
    game: "BGMI",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validatePhoneNumber = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    setFormData((prevState) => ({
      ...prevState,
      phoneNumber: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful!");
        navigate("/registration-success");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="bgmi-header">
        <nav className="bgmi-navbar">
          <a href="/">Home</a>
          <a href="/update_index.html">News & Updates</a>
          <a
            href="https://www.youtube.com/channel/UC1HnomUTgEeItSfDI0Pak9g"
            target="_blank"
            rel="noreferrer"
          >
            Live eSports
          </a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Background */}
      <div className="bgmi-background"></div>

      {/* Container */}
      <div className="bgmi-container">
        <div className="bgmi-content">
          <div className="bgmi-esports">
            <h2 className="bgmi-logo">eSports</h2>
          </div>

          <div className="bgmi-text-sci">
            <h2>
              Welcome!<br />
              <span>To Battlegrounds Mobile India</span>
            </h2>
            <p>
              Fill the information below to participate in the BGMI eSports
              Tournament
            </p>
            <div className="bgmi-social-icons">
              <a href="#"><i className="bx bxl-twitter"></i></a>
              <a href="#"><i className="bx bxl-facebook"></i></a>
              <a href="#"><i className="bx bxl-telegram"></i></a>
              <a href="#"><i className="bx bxl-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bgmi-logreg-box">
          <div className="bgmi-form-box bgmi-login">
            <form onSubmit={handleSubmit}>
              <h2>Registration Form</h2>

              <div className="bgmi-input-box">
                <span className="bgmi-icon">
                  <i className="bx bx-user"></i>
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>

              <div className="bgmi-input-box">
                <span className="bgmi-icon">
                  <i className="bx bx-user"></i>
                </span>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="18"
                  max="100"
                  placeholder="Age"
                  required
                />
              </div>

              <div className="bgmi-input-box">
                <span className="bgmi-icon">
                  <i className="bx bxl-gmail"></i>
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>

              <div className="bgmi-input-box">
                <span className="bgmi-icon">
                  <i className="bx bxs-lock-alt"></i>
                </span>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={validatePhoneNumber}
                  placeholder="Phone Number"
                  required
                />
              </div>

              <div className="bgmi-input-box">
                <span className="bgmi-icon">
                  <i className="bx bx-user"></i>
                </span>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  placeholder="Date of Birth"
                />
              </div>

              <div className="bgmi-input-box">
                <span className="bgmi-icon">
                  <i className="bx bx-user"></i>
                </span>
                <input
                  type="text"
                  name="gameId"
                  value={formData.gameId}
                  onChange={handleChange}
                  placeholder="Game ID"
                  required
                />
              </div>

              <input
                type="submit"
                className="bgmi-btn"
                name="register"
                value="Register"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgmiRegister;
