// import React, { useState, useEffect } from "react";
// import { Modal, Button } from "react-bootstrap";

// const PromoPopup = () => {
//   const [show, setShow] = useState(false);

//   // Mostrar el popup cuando la página cargue
//   useEffect(() => {
//     setShow(true);
//     // Cerrar el popup automáticamente después de 3 segundos
//     const timer = setTimeout(() => {
//       setShow(false);
//     }, 9000);

//     // Limpiar el timer cuando se desmonta el componente
//     return () => clearTimeout(timer);
//   }, []);

//   const handleClose = () => setShow(false);

//   return (
//     <Modal show={show} onHide={handleClose} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>¡Promoción Especial!</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <p>
//           Participa en nuestro plan de referidos. Por cada referido efectivo,
//           ¡recibirás un 50% de descuento en tu factura del próximo mes!
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="primary" onClick={handleClose}>
//           Entendido
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default PromoPopup;

import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "../styles/promopopup.css"; // Importa el archivo CSS para estilos personalizados

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
    <Modal show={show} onHide={handleClose} centered className="modal-dark">
      <Modal.Header closeButton className="modal-header-dark">
        <Modal.Title>¡Promoción Especial!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-dark">
        <p>
          Participa en nuestro plan de referidos. Por cada referido efectivo,
          ¡recibirás un 50% de descuento en tu factura del próximo mes!
        </p>
      </Modal.Body>
      <Modal.Footer className="modal-footer-dark d-flex justify-content-center">
        <Button
          variant="light"
          onClick={() => window.open("https://wa.me/584120626775", "_blank")} // Cambia el número por el tuyo
        >
          Contactar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PromoPopup;
