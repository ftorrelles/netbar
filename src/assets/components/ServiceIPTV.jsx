import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/serviceiptv.css";

const ServiceIPTV = () => {
  return (
    <section className="iptv-section">
      <Container fluid className="iptv-content">
        <Row className="align-items-center">
          <Col md={6} className="iptv-text">
            <h2 className="iptv-title">Servicio IPTV, InterwirelessTV</h2>
            <p className="iptv-description">
              Disfruta de una amplia variedad de canales de TV en vivo,
              peliculas, series, con rendimiento optimizado.{" "}
              <strong>
                con nuevos canales y contenido agregados frecuentemente.
              </strong>
              ,
            </p>
            <p className="iptv-highlights">
              Disponible para <strong>Smart TVs</strong>,{" "}
              <strong>Teléfonos Inteligentes</strong>, y{" "}
              <strong>Tablets</strong>. ¡Sintoniza tus programas favoritos donde
              quieras!
            </p>
            <div className="iptv-button">
              <Button
                href="https://wa.me/584243241423"
                target="_blank"
                variant="light"
              >
                Solicitar Servicio IPTV
              </Button>
            </div>
          </Col>
          <Col md={6} className="iptv-image">
            <img src="/IPTV.jpg" alt="IPTV service" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceIPTV;
