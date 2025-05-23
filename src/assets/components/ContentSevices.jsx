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
      speed: "100 MBPS de velocidad",
      benefit1: "ONU WIFI doble banda (5G)",
      benefit2: "Atención inmediata",
      // pice1: "25$ (divisa en fisico)",
      pice2: "27$ (bs tasa BCV)",
    },
    {
      planName: "Plan Plata",
      speed: "150 MBPS de velocidad",
      benefit1: "ONU WIFI doble banda (5G)",
      benefit2: "Atención inmediata",
      // pice1: "30$ (divisa en fisico)",
      pice2: "32$ (bs tasa BCV)",
    },
    {
      planName: "Plan Oro",
      speed: "200 MBPS de velocidad",
      benefit1: "ONU WIFI doble banda (5G)",
      benefit2: "Atención inmediata",
      // pice1: "35$ (divisa en fisico)",
      pice2: "37$ (bs tasa BCV)",
    },
  ];

  return (
    <section className="section-services">
      <h2>Nuestros Planes de internet</h2>
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
    </section>
  );
};

export default ContentServices;
