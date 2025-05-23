import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookieConsent from "./components/CookieConsent";
import Impressum from "./pages/Impressum";
import Home from "./pages/LandingPage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-consent" element={<CookieConsent />} />
          </Routes>
        </main>

        {window.location.pathname !== "/" && <Footer />}
      </div>
    </Router>
  );
};

export default App;
