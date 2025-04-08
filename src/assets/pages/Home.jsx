import "../styles/home.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentAbout from "../components/ContentAbout";
import Differential from "../components/Differential";
import ContentServices from "../components/ContentSevices";
import PhotoGallery from "../components/PhotoGallery";
import ServiceIPTV from "../components/ServiceIPTV";
import Draw from "../components/draw";
import AlertSection from "../components/AlertSection";
import ContentInfo from "../components/ContentInfo";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFloating((prevIsFloating) => !prevIsFloating);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <section className="home">
        <Carousel indicators={false} fade>
          <Carousel.Item>
            <picture>
              <source media="(min-width: 992px)" srcSet="/newhome1.png" />
              <source media="(max-width: 991px)" srcSet="/newhome1mobile.png" />
              <img
                className="d-block w-100"
                src="/newhome1.png"
                alt="first slide"
              />
            </picture>
            <div className="text-container">
              <h3>
                <strong>Conexión Fibra Óptica, Internet para todos.</strong>
              </h3>
              <div
                className={`floating-button-container ${
                  isFloating ? "floating" : ""
                }`}
              >
                <Button
                  as={Link}
                  variant="light"
                  to="/contact"
                  className="floating-button"
                >
                  Quiero informacion
                </Button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <picture>
              <source media="(min-width: 992px)" srcSet="/newhome2.png" />
              <source media="(max-width: 991px)" srcSet="/newhome2mobile.png" />
              <img
                className="d-block w-100"
                src="/newhome2.png"
                alt="Second slide"
              />
            </picture>
            <div className="text-container">
              <h3>
                <strong>
                  Planes de Internet a tu Medida, para que elijas el mejor para
                  tu familia
                </strong>
              </h3>
              <div
                className={`floating-button-container ${
                  isFloating ? "floating" : ""
                }`}
              >
                <Button
                  variant="light"
                  href="https://wa.me/584120626775"
                  target="_blank"
                  className="floating-button"
                >
                  Quiero información
                </Button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
      <ContentAbout />
      <Differential />
      <ContentServices />
      <ServiceIPTV />
      <Draw />
      <AlertSection />
      <PhotoGallery />
      <ContentInfo />
    </>
  );
};

export default Home;
