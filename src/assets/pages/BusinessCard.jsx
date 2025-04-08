import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import "../styles/businessCard.css";

const BusinessCard = () => {
  return (
    <div className="card-business-container">
      <div className="card-business">
        <div className="card-business-logo">
          <img src="/1.svg" alt="Logo" />
        </div>
        {/* <h4 className="card-business-title">Netbar</h4> */}

        <p className="card-business-subtitle">
          Síguenos en nuestras redes sociales y visita nuestro sitio web
        </p>
        <div className="card-business-buttons card-business-icons">
          <a
            href="https://www.facebook.com/profile.php?id=61567127995251&rdid=9yKq3nKLFTcwD5xj"
            target="_blank"
            className="card-business-button"
          >
            <FaFacebook className="icon" /> Síguenos en Facebook
          </a>
          <a
            href="https://www.instagram.com/netbar23633/"
            target="_blank"
            className="card-business-button"
          >
            <FaInstagram className="icon" />
            Síguenos en Instagram
          </a>
          <Link to="/" className="card-business-button">
            <CgWebsite className="icon" />
            Visita nuestro sitio web
          </Link>
          <a
            href="https://wa.me/584120626775?text=Hola%20,%20me%20gustaría%20agendar%20obtener%20información%20sobre%20los%20servicios%20de%20NetBar"
            target="_blank"
            className="card-business-button"
          >
            <FaWhatsapp className="icon" />
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
