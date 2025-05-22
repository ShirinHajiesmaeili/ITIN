import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BackgroundColour from "../components/BackgroundColour.jsx";
import Navbar from "../components/Navbar.jsx";

const CookieConsent = () => {
  const [consent, setConsent] = useState(null);
  const [showMessage, setShowMessage] = useState(true);

  const handleAccept = () => {
    setConsent("accepted");
    localStorage.setItem("cookieConsent", "accepted");
  };

  const handleDeny = () => {
    setConsent("denied");
    localStorage.setItem("cookieConsent", "denied");
  };

  useEffect(() => {
    if (consent) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [consent]);

  return (
    <div className="relative min-h-screen bg-white text-[#037c92] font-kodchasan">
      <BackgroundColour />
      <Navbar />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 py-8 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4 sm:text-3xl">Cookie Policy</h1>

        <p className="mb-4 text-gray-600 text-sm sm:text-base text-center sm:text-left">
          This website uses cookies to improve user experience, analyze traffic,
          and personalize content and ads. By continuing to use this website,
          you agree to the use of cookies as described below.
        </p>

        <h2 className="text-xl font-semibold mt-6 sm:text-2xl">
          What are Cookies?
        </h2>
        <p className="mb-4 text-gray-600 text-sm sm:text-base">
          Cookies are small text files placed on your device when you visit a
          website. They help enhance your experience by remembering your
          preferences, analyzing traffic, and personalizing content.
        </p>

        <h2 className="text-xl font-semibold mt-6 sm:text-2xl">
          How We Use Cookies
        </h2>
        <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-base space-y-2">
          <li>
            <strong className="text-[#f7941c]">Essential Cookies:</strong>{" "}
            Needed for the website to function (e.g., login, preferences).
          </li>
          <li>
            <strong className="text-[#f7941c]">Analytics Cookies:</strong>{" "}
            Collect anonymous usage data to improve performance.
          </li>
          <li>
            <strong className="text-[#f7941c]">Marketing Cookies:</strong> Track
            browsing behavior to deliver personalized ads.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 sm:text-2xl">
          Your Cookie Preferences
        </h2>
        <p className="mb-4 text-gray-600 text-sm sm:text-base">
          You can manage cookies via your browser settings. Disabling essential
          cookies may affect site functionality.
        </p>

        <p className="text-sm text-gray-600 mt-4 text-center sm:text-left">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <button
            onClick={handleAccept}
            className="px-6 py-3 w-32 rounded-full bg-[#037c92] hover:bg-[#aae3fa] transition-colors shadow-lg text-[#f7941c] font-semibold text-sm sm:text-base"
          >
            Accept
          </button>
          <button
            onClick={handleDeny}
            className="px-6 py-3 w-32 rounded-full bg-[#037c92] hover:bg-[#aae3fa] transition-colors shadow-lg text-[#f7941c] font-semibold text-sm sm:text-base"
          >
            Deny
          </button>
        </div>

        {showMessage && consent && (
          <p className="text-center mt-6 text-sm text-gray-600">
            You have {consent} cookies.
          </p>
        )}

        <div className="text-center mt-10">
          <Link
            to="/"
            className="inline-block px-4 py-2 text-[#037c92] hover:text-[#f7941c] transition-all"
          >
            <span>Back to Home 🏠</span>
          </Link>
        </div>
      </div>

      {/* Optional: Add padding-bottom for mobile readability */}
      <div className="h-10 sm:h-0" />
    </div>
  );
};

export default CookieConsent;
