import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "../styles/promopopup.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const PromoPopup = () => {
  const [show, setShow] = useState(false);

  // Mostrar el popup cuando la página cargue
  useEffect(() => {
    setShow(true);
    // Cerrar el popup automáticamente después de 3 segundos
    const timer = setTimeout(() => {
      setShow(false);
    }, 9000);

    // Limpiar el timer cuando se desmonta el componente
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShow(false);

  return (
    // <Modal show={show} onHide={handleClose} centered className="modal-dark">
    //   <Modal.Header closeButton className="modal-header-dark">
    //     <Modal.Title>¡Promoción Especial!</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body className="modal-body-dark">
    //     <p>
    //       Participa en nuestro plan de referidos. Por cada referido efectivo,
    //       ¡recibirás un 50% de descuento en tu factura del próximo mes!
    //     </p>
    //   </Modal.Body>
    //   <Modal.Footer className="modal-footer-dark d-flex justify-content-center">
    //     <Button
    //       variant="light"
    //       onClick={() => window.open("https://wa.me/584120626775", "_blank")} // Cambia el número por el tuyo
    //     >
    //       Contactar
    //     </Button>
    //   </Modal.Footer>
    // </Modal>
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="modal-header-dark">
        <Modal.Title>Nuestras redes sociales</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-dark">
        <div className="card-popup-container">
          <div className="card-popup">
            <div className="card-popup-logo">
              <img src="/1.svg" alt="Logo" />
            </div>
            {/* <h4 className="card-popup-title">Netbar</h4> */}

            {/* <p className="card-popup-subtitle">
              Síguenos en nuestras redes sociales y visita nuestro sitio web
            </p> */}
            <div className="card-popup-buttons card-popup-icons">
              <a
                href="https://www.facebook.com/profile.php?id=61567127995251&rdid=9yKq3nKLFTcwD5xj"
                target="_blank"
                className="card-popup-button"
              >
                <FaFacebook className="icon" /> Síguenos en Facebook
              </a>
              <a
                href="https://www.instagram.com/netbar23633/"
                target="_blank"
                className="card-popup-button"
              >
                <FaInstagram className="icon" />
                Síguenos en Instagram
              </a>
              <a
                href="https://wa.me/584120626775?text=Hola,%20me%20gustaría%20obtener%20información%20sobre%20los%20servicios%20de%20NetBar"
                target="_blank"
                className="card-popup-button"
              >
                <FaWhatsapp className="icon" />
                Nuestro WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="modal-footer-dark d-flex justify-content-center">
        <Button
          variant="light"
          onClick={() => window.open("https://wa.me/584120626775", "_blank")}
        >
          Contactar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PromoPopup;
