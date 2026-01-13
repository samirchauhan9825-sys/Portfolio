import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="banner">
        <header className="d-flex max-width header-sec">
          <h1>
            &lt;<a style={{ color: "#fd6e0a" }}>J</a>C /&gt;
          </h1>

          {/* Hamburger Icon */}
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

          {/* Navigation Menu */}
          <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
            <ul className="d-flex">
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <button>Hire Me</button>
            </ul>
          </nav>
        </header>

        <div>
          <div className="banner-content d-flex max-width">
            <div className="haeding">
              <h3>Hi , I am</h3>
              <h1>Jigar Chauhan</h1>
              <p>
                I'am a full stack devloper with a focus on creating exceptional
                digital experiences that are fast, accessible, visualy
                appealing, and responsive. Even though i have been creating
                webapplications for over 6 Monts, i still love it as if it was
                something new.
              </p>

              <div className="btn d-flex">
                <button className="btn1">
                  <span className="fa fa-download" /> Download CV
                </button>
                <button className="btn2">
                  <span className="fa fa-phone" /> Contact
                </button>
              </div>
            </div>

            <div className="pic">
              <img src="./images/me.jpg" alt="My-Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
