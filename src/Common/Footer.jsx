import React from "react";

function Footer() {
  return (
    <>
      {/* footer section */}
      <div className="footer">
        <div className="footer-sec d-flex max-width">
          <div className="connect">
            <h2>Lets Connect</h2>
            <p>
              Please fill out the form on this section to contact with me or
              call between 9:00 A.M and 8.00 P.M ET, Monday through Friday.
            </p>
          </div>
          <div className="msg">
            <h2>Let's Message me</h2>
            <input type="text" placeholder="Your name" />
            <br />
            <input type="text" placeholder="Your email" />
            <br />
            <textarea placeholder="Message" defaultValue={""} />
            <br />
            <button className="btn1">Submit</button>
          </div>
        </div>
        <div className="last d-flex max-width justify-content-between my-4">
          <div className="icon d-flex gap-4">
            <span className="fa fa-linkedin fs-5" style={{ color: "#fd6e0a" }} />
            <a href="https://github.com/"><span className="fa fa-github fs-5" style={{ color: "#fd6e0a" }}></span></a>
            <a href="https://www.instagram.com/jigar_chauhan___/"><span className="fa fa-instagram fs-5" style={{ color: "#fd6e0a" }} /></a>
          </div>

          <div className="content">
            © 2025 Copyright Design By <a href="#" className="text-decoration-none"  style={{ color: "#dc6008" }}> Jigar Chauhan</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
