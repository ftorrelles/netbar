import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import "../styles/info.css";

const ContentInfo = () => {
  return (
    <Container fluid className="elegant-contact-section py-5">
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h2 className="section-title">Conéctate con Nosotros</h2>
          <p className="section-subtitle">
            Estamos aquí para ofrecerte la mejor experiencia. ¡Contáctanos y
            síguenos en redes!
          </p>
        </Col>
      </Row>
      <Row className="gx-5">
        {/* Información de contacto */}
        <Col xs={12} md={6} className="contact-info-column">
          <div className="contact-item">
            <FaPhoneAlt size={40} className="contact-icon" />
            <div>
              <h5>Teléfono</h5>
              <p>+58 412-0626775</p>
            </div>
          </div>
          <div className="contact-item">
            <FaWhatsapp size={40} className="contact-icon" />
            <div>
              <h5>WhatsApp</h5>
              <p>
                <a
                  href="https://wa.me/584120626775"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chatea con nosotros
                </a>
              </p>
            </div>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt size={40} className="contact-icon" />
            <div>
              <h5>Dirección</h5>
              <p>
                Av Principal El Macaro al lado del hotel el Saman, Local 2,
                Aragua.
              </p>
            </div>
          </div>
        </Col>
        {/* Redes sociales */}
        <Col xs={12} md={6} className="d-flex align-items-center">
          <div className="social-section text-center w-100">
            <h5 className="mb-4">Síguenos en Redes Sociales</h5>
            <div className="social-icons d-flex justify-content-center">
              <a
                href="https://www.facebook.com/profile.php?id=61567127995251&rdid=9yKq3nKLFTcwD5xj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={50} className="social-icon" />
              </a>
              <a
                href="https://www.instagram.com/netbar23633/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={50} className="social-icon" />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContentInfo;
