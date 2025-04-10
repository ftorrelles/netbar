import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import NavBar from "./assets/components/NavBar";
import Footer from "./assets/components/footer";
import InternetService from "./assets/pages/InternetService";
import PageIPTV from "./assets/pages/PageIPTV";
import PromoPopup from "./assets/components/PromoPopup";
import BusinessCard from "./assets/pages/BusinessCard";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/businessCard" element={<BusinessCard />} />
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/PageIPTV"
            element={
              <MainLayout>
                <PageIPTV />
              </MainLayout>
            }
          />
          <Route
            path="/internetService"
            element={
              <MainLayout>
                <InternetService />
              </MainLayout>
            }
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

// Main layout including NavBar, Home page, and Footer
function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
      <PromoPopup />
      <FloatingLogo />
    </>
  );
}

// Floating WhatsApp logo
function FloatingLogo() {
  const whatsappURL =
    "https://wa.me/+584120626775?text=Hola!%20Estoy%20interesado%20en%20recibir%20información.%";
  return (
    <div
      className="floating-logo"
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: "9999",
      }}
    >
      <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
        <i className="bx bxl-whatsapp-square"></i>
      </a>
    </div>
  );
}

export default App;
