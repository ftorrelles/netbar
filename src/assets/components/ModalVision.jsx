import Modal from "react-bootstrap/Modal";

const ModalVision = ({ show, handleClose }) => {
  return (
    <>
      <Modal className="modal-lg modal-color" show={show} onHide={handleClose}>
        <Modal.Header
          style={{ backgroundColor: "#000000be", color: "#f9f7f7" }}
          closeButton
        >
          <Modal.Title>Vision</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#000000be", color: "#f9f7f7" }}>
          <p>
            Ser el proveedor líder de servicios de internet en nuestra región,
            reconocido por nuestra accesibilidad, compromiso social y atención
            rápida, llevando conectividad de calidad a cada hogar y comunidad.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalVision;
