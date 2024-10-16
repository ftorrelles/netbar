import "../styles/about.css";
import { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import ModalVision from "./ModalVision";
import ModalMision from "./ModalMision";

const ContentAbout = () => {
  //modal Vision
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //modal Mision
  const [showMision, setShowMision] = useState(false);
  const handleCloseMision = () => setShowMision(false);
  const handleShowMision = () => setShowMision(true);
  return (
    <>
      <Container className="container_about">
        <Row xs={1} md={2} lg={2}>
          <Col className="div_info_about" lg={7}>
            <h2>Sobre nosotros</h2>
            <p>
              En NetBar, buscamos brindar soluciones de internet accesibles,
              confiables y adaptadas a las necesidades de nuestros clientes. Nos
              destacamos por ofrecer fibra óptica de alta velocidad y una
              atención rápida que prioriza la satisfacción de cada usuario.
              <br />
              <br />
              Creemos en el poder de la conectividad para transformar vidas y
              comunidades, y trabajamos día a día para que el acceso a internet
              de calidad esté al alcance de todos.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <div className="bt_mision-vision">
                <Button
                  variant="outline-dark"
                  type="button"
                  onClick={handleShow}
                >
                  Vision
                </Button>
              </div>
              <div>
                <Button
                  variant="outline-dark"
                  type="button"
                  onClick={handleShowMision}
                >
                  Mision
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={5} className="div_img_about">
            <img src="/about.jpg" alt="sobre nosotros" />
          </Col>
        </Row>
      </Container>
      <ModalVision show={show} handleClose={handleClose} />
      <ModalMision
        showMision={showMision}
        handleCloseMision={handleCloseMision}
      />
    </>
  );
};

export default ContentAbout;
