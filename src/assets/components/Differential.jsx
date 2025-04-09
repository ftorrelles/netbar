import "../styles/differential.css";
//libreria de animaciones
import "animate.css";
import { Card, Col, Container, Row } from "react-bootstrap";
//libreria para detectar cuando la seccion este en el vh
import { useInView } from "react-intersection-observer";

const Differential = () => {
  //logica libreria react-intersection-observer
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <section className="differential">
      <div className="differential__content">
        <h2
          className={`differential__title animate__animated ${
            inView ? "animate__fadeInDown" : ""
          }`}
          ref={ref}
        >
          Que nos hace diferentes
        </h2>
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card
                className={`differential__feature ${
                  inView
                    ? "animate__animated animate__fadeIn animate__delay-1s"
                    : ""
                }`}
                ref={ref}
              >
                <Card.Body>
                  <i className="bx bx-signal-5"></i>
                  <Card.Title>Fibra Óptica de alta velocidad</Card.Title>
                  <Card.Text>
                    Disfruta de una conexión estable y rápida con nuestra fibra
                    óptica, ideal para hogares y negocios. Mantén todos tus
                    dispositivos conectados sin interrupciones.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className={`differential__feature ${
                  inView
                    ? "animate__animated animate__fadeIn animate__delay-1s"
                    : ""
                }`}
                ref={ref}
              >
                <Card.Body>
                  <i className="bx bxs-check-square"></i>
                  <Card.Title>Equipos de Última Generación</Card.Title>
                  <Card.Text>
                    Usamos ONU WIFI doble banda (5G, 6G) y equipos avanzados que
                    maximizan la velocidad de nuestra red. Con NetBar, obtienes
                    calidad tanto en conexión como en tecnología
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className={`differential__feature ${
                  inView
                    ? "animate__animated animate__fadeIn animate__delay-1s"
                    : ""
                }`}
                ref={ref}
              >
                <Card.Body>
                  <i className="bx bxs-timer"></i>
                  <Card.Title>
                    Atención Inmediata y Compromiso con la Comunidad
                  </Card.Title>
                  <Card.Text>
                    Ofrecemos soporte inmediato ante cualquier falla. Además,
                    realizamos sorteos, premios por referidos y brindamos
                    internet gratuito a escuelas y comunidades.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Differential;
