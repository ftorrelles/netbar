import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_container">
          <div className="footer-content">
            <h3 style={{ textAlign: "center" }}>Sobre nosotros</h3>
            <div style={{ textAlign: "center" }}>
              <ul>
                <li>
                  <Link to="/aboutUs">Mision</Link>
                </li>
                <li>
                  <Link to="/aboutUs">Vision</Link>
                </li>
                <li>
                  <Link to="/aboutUs">Diferencial</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content">
            <h3 style={{ textAlign: "center" }}>
              <a href="/#">
                <img src="/2.svg" alt="" />
                {/* <strong style={{ color: "#ff533d" }}>NETBAR</strong> */}
              </a>
            </h3>
          </div>
          <div className="footer-content">
            <h3 style={{ textAlign: "center" }}>Redes sociales</h3>
            <div className="div_icons_contact">
              <a href="https://www.instagram.com/netbar23633/" target="_blank">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="https://wa.me/584120626775" target="_blank">
                <i className="bx bxl-whatsapp"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61567127995251&rdid=9yKq3nKLFTcwD5xj"
                target="_blank"
              >
                <i className="bx bxl-facebook-circle"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="copy">
          <p className="footer_copy">©NetBar. All rigths reserved </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
