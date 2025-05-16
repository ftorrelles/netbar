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
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home">
        <Carousel indicators={false} fade>
          <Carousel.Item>
            <picture>
              <source media="(min-width: 992px)" srcSet="/newhome1.jpg" />
              <source media="(max-width: 991px)" srcSet="/newhome1mobile.jpg" />
              <img
                className="d-block w-100"
                src="/newhome1.jpg"
                alt="first slide"
              />
            </picture>
            <div className="text-container">
              <h3>
                <strong>
                  Interner Fibra Óptica, Turmero Municipio Santiago
                  Mariño. Edo Aragua.
                </strong>
              </h3>
              <div>
                <Button as={Link} variant="light" to="/contact">
                  Quiero informacion
                </Button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <picture>
              <source media="(min-width: 992px)" srcSet="/newhome2.jpg" />
              <source media="(max-width: 991px)" srcSet="/newhome2mobile.jpg" />
              <img
                className="d-block w-100"
                src="/newhome2.jpg"
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
              <div>
                <Button
                  variant="light"
                  href="https://wa.me/584120626775"
                  target="_blank"
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
