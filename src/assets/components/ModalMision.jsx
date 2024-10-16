import Modal from "react-bootstrap/Modal";

const ModalMision = ({ showMision, handleCloseMision }) => {
  return (
    <>
      <Modal
        className="modal-lg modal-color"
        show={showMision}
        onHide={handleCloseMision}
      >
        <Modal.Header
          style={{ backgroundColor: "#000000be", color: "#f9f7f7" }}
          closeButton
        >
          <Modal.Title>Mision</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#000000be", color: "#f9f7f7" }}>
          <p>
            Ofrecer soluciones de internet asequibles, confiables y adaptadas a
            las necesidades de nuestros clientes, al tiempo que contribuimos al
            desarrollo de comunidades a través de iniciativas que brindan
            internet gratuito a escuelas y servicios esenciales.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalMision;
