import React, { useState } from "react";
import "./coc_regi_style.css";
import "boxicons/css/boxicons.min.css";

const CocRegister = () => {
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
      <header className="coc-header">
        <nav className="coc-navbar">
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
      <div className="coc-background"></div>

      {/* Main Container */}
      <div className="coc-container">
        <div className="coc-content">
          <div className="coc-esports">
            <h2 className="coc-logo">eSports</h2>
          </div>

          <div className="coc-text-sci">
            <h2>
              Welcome!
              <br />
              <span>To Clash of Clans</span>
            </h2>
            <p>
              Fill the information given to participate in the Clash of Clans
              eSports Tournament
            </p>
            <div className="coc-social-icons">
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
        <div className={`coc-logreg-box${isRegisterActive ? " active" : ""}`}>
          <div className="coc-form-box coc-login">
            <form action="coc_contact_thanks_index.php" method="POST">
              <h2>Registration Form</h2>

              <div className="coc-input-box">
                <span className="coc-icon">
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

              <div className="coc-input-box">
                <span className="coc-icon">
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

              <div className="coc-input-box">
                <span className="coc-icon">
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

              <div className="coc-input-box">
                <span className="coc-icon">
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

              <div className="coc-input-box">
                <span className="coc-icon">
                  <i className="bx bx-user"></i>
                </span>
                <input
                  type="date"
                  id="txtdob"
                  name="txtdob"
                  placeholder="Date of Birth"
                />
              </div>

              <div className="coc-input-box">
                <span className="coc-icon">
                  <i className="bx bx-user"></i>
                </span>
                <input
                  type="number"
                  id="txtgameid"
                  name="txtgameid"
                  placeholder="Game ID"
                  required
                />
              </div>

              <input
                type="submit"
                className="coc-btn"
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

export default CocRegister;
