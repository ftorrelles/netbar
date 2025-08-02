import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/draw.css";

const Draw = () => {
  return (
    <section className="sorteo-section">
      <Container fluid className="py-5 text-center">
        <Row className="justify-content-center mb-5">
          <Col md={8}>
            <h2 className="sorteo-title">
              Como participar en el sorteo trimestral
            </h2>
            <ul className="sorteo-steps">
              <li>1. Recomienda al menos 1 nuevo cliente.</li>
              <li>
                2. Por cada recomendación, recibiras 2 tickes para participar en
                el sorteo.
              </li>
              <li>
                3. Ademas, disfruta de un 50% de descuento en el mes actual.
              </li>
            </ul>
            <p className="sorteo-description">
              ¡¡¡No pierdas la oportunidad de ganar y ahorrar!!!🚀🚀
            </p>
            <p className="sorteo-description">
              Contactanos y comienza a recomendar hoy mismo.
            </p>
          </Col>
        </Row>
        {/* <Row className="sorteo-grid text-white">
          <Col xs={12} sm={6} md={3}>
            <div className="sorteo-item">
              <img
                src="/gallery2.jpg"
                alt="Obtener Ticket"
                className="sorteo-image"
              />
              <h3>1. Obtén tu Ticket</h3>
              <p>
                Al pagar en divisa en nuestra oficina, o dar una referencia
                efectiva estaras participando.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div className="sorteo-item">
              <img
                src="/gallery9.jpg"
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
                src="/gallery7.jpg"
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
        </Row> */}
      </Container>
    </section>
  );
};

export default Draw;
