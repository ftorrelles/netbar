import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/draw.css";

const Draw = () => {
  return (
    <section className="sorteo-section">
      <Container fluid className="py-5 text-center">
        <Row className="justify-content-center mb-5">
          <Col md={8}>
            <h2 className="sorteo-title">
              ¡Participa en Nuestros Sorteos Mensuales!
            </h2>
            <p className="sorteo-description">
              Cada mes puedes ganar increíbles premios participando en nuestros
              sorteos exclusivos para clientes. ¡Solo paga en divisa, obtén tu
              ticket y asiste al evento!
            </p>
          </Col>
        </Row>
        <Row className="sorteo-grid text-white">
          <Col xs={12} sm={6} md={3}>
            <div className="sorteo-item">
              <img
                src="/gallery2.png"
                alt="Obtener Ticket"
                className="sorteo-image"
              />
              <h3>1. Obtén tu Ticket</h3>
              <p>
                Al pagar en divisa en nuestra oficina, recibirás un ticket con
                tu nombre para participar.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div className="sorteo-item">
              <img
                src="/gallery9.png"
                alt="Asiste al Evento"
                className="sorteo-image"
              />
              <h3>2. Asiste al Evento</h3>
              <p>
                Ven al evento de sorteo mensual en vivo y trae tu ticket para
                participar en el sorteo.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div className="sorteo-item">
              <img
                src="/gallery7.png"
                alt="Gana Premios"
                className="sorteo-image"
              />
              <h3>3. Increíbles Premios</h3>
              <p>
                Puedes ganar desde smarTV, ventiladores, miniups, bolsas de
                comida y otros grandes premios.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Draw;