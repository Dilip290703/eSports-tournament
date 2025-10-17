import React, { useState } from "react";
import "./bgmi_regi_style.css";
import "boxicons/css/boxicons.min.css";

const BgmiRegister = () => {
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  const validatePhoneNumber = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    e.target.value = value;
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
        <div className={`bgmi-logreg-box${isRegisterActive ? " active" : ""}`}>
          <div className="bgmi-form-box bgmi-login">
            <form action="bgmi_contact_thanks_index.php" method="POST">
              <h2>Registration Form</h2>

              <div className="bgmi-input-box">
                <span className="bgmi-icon">
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

              <div className="bgmi-input-box">
                <span className="bgmi-icon">
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

              <div className="bgmi-input-box">
                <span className="bgmi-icon">
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

              <div className="bgmi-input-box">
                <span className="bgmi-icon">
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

              <div className="bgmi-input-box">
                <span className="bgmi-icon">
                  <i className="bx bx-user"></i>
                </span>
                <input
                  type="date"
                  id="txtdob"
                  name="txtdob"
                  placeholder="Date of Birth"
                />
              </div>

              <div className="bgmi-input-box">
                <span className="bgmi-icon">
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
