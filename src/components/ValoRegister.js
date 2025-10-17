import React, { useState } from "react";
import "./valo_regi_style.css";
import "boxicons/css/boxicons.min.css";

const ValoRegister = () => {
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  // ✅ Phone number validation
  const validatePhoneNumber = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // remove non-numbers
    if (value.length > 10) {
      value = value.slice(0, 10); // limit to 10 digits
    }
    e.target.value = value;
  };

  return (
    <div>
      {/* Header Navigation */}
      <header className="valo-header">
        <nav className="valo-navbar">
          <a href="/">Home</a>
          <a href="update_index.html">News & Updates</a>
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
      <div className="valo-background"></div>

      {/* Main Container */}
      <div className="valo-container">
        <div className="valo-content">
          <div className="valo-esports">
            <h2 className="valo-logo">eSports</h2>
          </div>

          <div className="valo-text-sci">
            <h2>
              Welcome!
              <br />
              <span>To Valorant</span>
            </h2>
            <p>
              Fill the information below to participate in the Valorant eSports
              Tournament
            </p>
            <div className="valo-social-icons">
              <a href="#">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#">
                <i className="bx bxl-telegram"></i>
              </a>
              <a href="#">
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className={`valo-logreg-box${isRegisterActive ? " active" : ""}`}>
          <div className="valo-form-box valo-login">
            <form action="valo_contact_thanks_index.php" method="POST">
              <h2>Registration Form</h2>

              <div className="valo-input-box">
                <span className="valo-icon">
                  <i className="bx bx-user"></i>
                </span>
                <input
                  type="text"
                  name="txtname"
                  id="txtname"
                  placeholder="Name"
                  required
                />
              </div>

              <div className="valo-input-box">
                <span className="valo-icon">
                  <i className="bx bx-user"></i>
                </span>
                <input
                  type="number"
                  id="txtage"
                  name="txtage"
                  min="18"
                  max="100"
                  placeholder="Age"
                  required
                />
              </div>

              <div className="valo-input-box">
                <span className="valo-icon">
                  <i className="bx bxl-gmail"></i>
                </span>
                <input
                  type="email"
                  id="txtemail"
                  name="txtemail"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="valo-input-box">
                <span className="valo-icon">
                  <i className="bx bxs-lock-alt"></i>
                </span>
                <input
                  type="number"
                  id="txtphonenumber"
                  name="txtphonenumber"
                  placeholder="Phone Number"
                  required
                  onInput={validatePhoneNumber}
                />
              </div>

              <div className="valo-input-box">
                <span className="valo-icon">
                  <i className="bx bx-user"></i>
                </span>
                <input
                  type="date"
                  id="txtdob"
                  name="txtdob"
                  placeholder="Date of Birth"
                />
              </div>

              <div className="valo-input-box">
                <span className="valo-icon">
                  <i className="bx bx-user"></i>
                </span>
                <input
                  type="number"
                  id="txtgameid"
                  required
                  name="txtgameid"
                  placeholder="Game ID"
                />
              </div>

              <input
                type="submit"
                className="valo-btn"
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

export default ValoRegister;
