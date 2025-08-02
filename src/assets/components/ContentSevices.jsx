import "../styles/services.css";
import { Button, Card } from "react-bootstrap";

const ContentServices = () => {
  const services = [
    {
      planName: "Plan Básico",
      speed: "30 MBPS de velocidad",
      benefit1: "ONU WIFI doble banda (5G)",
      benefit2: "Atención inmediata",
      // pice1: "25$ (divisa en fisico)",
      pice2: "22$ (bs tasa BCV)",
    },
    {
      planName: "Plan Bronce",
      speed: "200 MBPS de velocidad",
      benefit1: "ONU WIFI doble banda (5G)",
      benefit2: "Atención inmediata",
      // pice1: "25$ (divisa en fisico)",
      pice2: "27$ (bs tasa BCV)",
    },
    {
      planName: "Plan Plata",
      speed: "300 MBPS de velocidad",
      benefit1: "ONU WIFI doble banda (5G)",
      benefit2: "Atención inmediata",
      // pice1: "30$ (divisa en fisico)",
      pice2: "32$ (bs tasa BCV)",
    },
    {
      planName: "Plan Oro",
      speed: "400 MBPS de velocidad",
      benefit1: "ONU WIFI doble banda (5G)",
      benefit2: "Atención inmediata",
      pice2: "37$ (bs tasa BCV)",
    },
    {
      planName: "Plan Platino",
      speed: "600 MBPS de velocidad",
      benefit1: "ONU WIFI doble banda (5G)",
      benefit2: "Atención inmediata",
      pice2: "72$ (bs tasa BCV)",
    },
    {
      planName: "Plan Diamante",
      speed: "850 MBPS de velocidad",
      benefit1: "ONU WIFI doble banda (5G)",
      benefit2: "Atención inmediata",
      pice2: "87$ (bs tasa BCV)",
    },
  ];

  const servicesPymes = [
    {
      planName: "Plan Pyme Básico",
      speed: "100 MBPS de velocidad",
      benefit1: "ONU WIFI doble banda (5G)",
      benefit2: "Atención inmediata",
      pice2: "90$ (bs tasa BCV)",
    },
    {
      planName: "Plan Pyme Intermedio",
      speed: "200 MBPS de velocidad",
      benefit1: "ONU WIFI doble banda (5G)",
      benefit2: "Atención inmediata",
      pice2: "180$ (bs tasa BCV)",
    },
    {
      planName: "Plan Pyme Avanzado",
      speed: "300 MBPS de velocidad",
      benefit1: "ONU WIFI doble banda (5G)",
      benefit2: "Atención inmediata",
      pice2: "240$ (bs tasa BCV)",
    },
  ];

  return (
    <section className="section-services">
      <h2>Nuestros Planes Residenciales</h2>
      <div className="cards-services">
        {services.map((service, index) => {
          return (
            <Card key={index} bg="dark" text="white">
              <Card.Header className="card-title" as="h5">
                {service.planName}
              </Card.Header>
              <Card.Body className="card-body">
                <Card.Text className="card-text">
                  <ul>
                    <li>✔️ {service.speed}</li>
                    <li>✔️ {service.benefit1}</li>
                    <li>✔️ {service.benefit2}</li>
                    {/* <li>✔️ {service.pice1}</li> */}
                    <li>✔️ {service.pice2}</li>
                  </ul>
                </Card.Text>
                <div className="button-card">
                  <Button
                    href="https://wa.me/584120626775"
                    target="_blank"
                    variant="light"
                  >
                    Adquirir Plan
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <h2>Nuestros Planes de Pymes</h2>
      <div className="cards-services">
        {servicesPymes.map((service, index) => {
          return (
            <Card key={index} bg="dark" text="white">
              <Card.Header className="card-title" as="h5">
                {service.planName}
              </Card.Header>
              <Card.Body className="card-body">
                <Card.Text className="card-text">
                  <ul>
                    <li>✔️ {service.speed}</li>
                    <li>✔️ {service.benefit1}</li>
                    <li>✔️ {service.benefit2}</li>
                    {/* <li>✔️ {service.pice1}</li> */}
                    <li>✔️ {service.pice2}</li>
                  </ul>
                </Card.Text>
                <div className="button-card">
                  <Button
                    href="https://wa.me/584120626775"
                    target="_blank"
                    variant="light"
                  >
                    Adquirir Plan
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default ContentServices;
