import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/serviceiptv.css";
import { FaDownload } from "react-icons/fa";

const ServiceIPTV = () => {
  const apkData = {
    name: "interwireless_TV.apk",
    size: "64.51 MB",
    version: "1.0.0",
    downloadUrl: "/downloads/interwirelessTV_mod.apk", // Ruta donde estará el archivo
    lastUpdated: "10/05/2023",
  };
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
              <div className="download-actions">
                <a
                  href={apkData.downloadUrl}
                  download={apkData.name}
                  className="download-button-iptv"
                >
                  <FaDownload /> Descargar APK
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} className="iptv-image">
            <img src="/IPTV1.jpg" alt="IPTV service" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceIPTV;
