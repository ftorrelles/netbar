import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/navbar.css";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Efecto cambio de color en el navbar
  useEffect(() => {
    const changeBackground = () => {
      const nav = document.querySelector(".navBar");
      if (window.scrollY >= 100) {
        nav.style.backgroundColor = "#ff533d";
      } else {
        nav.style.backgroundColor = "transparent";
      }
    };

    window.addEventListener("scroll", changeBackground);

    // Eliminar el evento del DOM cuando se desmonte el componente
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <Navbar className="navBar" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="/logoNav.svg" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          style={{
            color: sidebarOpen ? "#0f1626" : "white",
            backgroundColor: "white",
            borderColor: "white",
          }}
          onClick={toggleSidebar}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={sidebarOpen}
          onHide={() => setSidebarOpen(false)}
          style={{ backgroundColor: "#0557b3" }}
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link
                as={Link}
                to="/internetService"
                style={{
                  color: "#f9f7f7",
                }}
              >
                <p>Servicios de internet</p>
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/PageIPTV"
                style={{
                  color: "#f9f7f7",
                }}
              >
                <p>IPTV</p>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/businessCard"
                style={{
                  color: "#f9f7f7",
                }}
              >
                <p>Redes sociales</p>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="https://clientes.wisphub.io/accounts/login/?next=/panel/"
                style={{
                  color: "#f9f7f7",
                }}
              >
                <p>Login</p>
              </Nav.Link>
              {/* <Nav.Link
                as={Link}
                to="/aboutUs"
                style={{
                  color: "#f9f7f7",
                }}
              >
                <p>Contacto</p>
              </Nav.Link> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
