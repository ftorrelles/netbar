import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import NavBar from "./assets/components/NavBar";
import Footer from "./assets/components/footer";
import InternetService from "./assets/pages/InternetService";
import PageIPTV from "./assets/pages/PageIPTV";
import PageAboutUs from "./assets/pages/PageAboutUs";
import PromoPopup from "./assets/components/PromoPopup";

function App() {
  return (
    <>
      <HashRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/internetService"
              element={<InternetService />}
            ></Route>
            <Route path="/serviceIPTV" element={<PageIPTV />}></Route>
            <Route path="/aboutUs" element={<PageAboutUs />}></Route>
          </Routes>
          <PromoPopup />
          <Footer />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
