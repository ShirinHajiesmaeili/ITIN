import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BackgroundColour from "../components/BackgroundColour.jsx";
import Navbar from "../components/Navbar.jsx";

const CookieConsent = () => {
  const [consent, setConsent] = useState(null); // State to track user consent
  const [showMessage, setShowMessage] = useState(true); // State to control visibility of the message

  const handleAccept = () => {
    setConsent("accepted");
    localStorage.setItem("cookieConsent", "accepted"); // Save consent to localStorage
  };

  const handleDeny = () => {
    setConsent("denied");
    localStorage.setItem("cookieConsent", "denied"); // Save denial to localStorage
  };

  // Hide the consent message after 3 seconds
  useEffect(() => {
    if (consent) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000); // 3 seconds delay

      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [consent]);

  return (
    <div className="relative h-screen overflow-hidden bg-white text-[#037c92] font-kodchasan">
      {/* BackgroundColour Component */}
      <BackgroundColour />
      <Navbar />

      <div className="relative z-10 max-w-4xl mx-auto p-6 sm:p-8">
        <h1 className="text-2xl font-bold mb-4 sm:text-3xl">Cookie Policy</h1>
        <p className="mb-4 text-gray-600 font-kodchasan text-sm sm:text-base text-center sm:text-left">
          This website uses cookies to improve user experience, analyze traffic,
          and personalize content and ads. By continuing to use this website,
          you agree to the use of cookies as described below.
        </p>

        <h2 className="text-xl font-semibold mt-4 sm:text-2xl">
          What are Cookies?
        </h2>
        <p className="mb-4 text-gray-600 font-kodchasan text-sm sm:text-base">
          Cookies are small text files placed on your device when you visit a
          website. They are used to enhance your experience by remembering your
          preferences, analyzing website traffic, and personalizing content.
        </p>

        <h2 className="text-xl font-semibold mt-4 sm:text-2xl">
          How We Use Cookies
        </h2>
        <ul className="list-disc pl-5 text-gray-600 font-kodchasan text-sm sm:text-base">
          <li>
            <strong className="text-[#f7941c]">Essential Cookies:</strong> These
            are required for the website to function properly (e.g., session
            management, login status, and language preferences).
          </li>
          <li>
            <strong className="text-[#f7941c]">Analytics Cookies:</strong> These
            help us collect anonymous data on how visitors use our website,
            allowing us to improve performance and user experience.
          </li>
          <li>
            <strong className="text-[#f7941c]">Marketing Cookies:</strong> These
            cookies track your browsing behavior and provide personalized ads
            based on your interests. They help us deliver targeted marketing
            campaigns and measure their effectiveness.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 sm:text-2xl">
          Your Cookie Preferences
        </h2>
        <p className="mb-4 text-gray-600 font-kodchasan text-sm sm:text-base">
          You can manage or disable cookies through your browser settings.
          However, blocking essential cookies may affect the functionality of
          the website. You can also control marketing cookies and adjust your
          preferences in our Cookie Settings.
        </p>

        <p className="text-sm text-gray-600 mt-4 text-center sm:text-left">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        {/* Accept and Deny Buttons */}
        <div className="flex justify-center gap-6 sm:gap-8 mt-6 flex-wrap">
          <button
            onClick={handleAccept}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 w-40 rounded-full bg-[#037c92] hover:bg-[#aae3fa] transition-colors shadow-lg text-[#f7941c] font-semibold text-sm sm:text-base"
          >
            Accept
          </button>
          <button
            onClick={handleDeny}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 w-40 rounded-full bg-[#037c92] hover:bg-[#aae3fa] transition-colors shadow-lg text-[#f7941c] font-semibold text-sm sm:text-base"
          >
            Deny
          </button>
        </div>

        {/* Feedback Message */}
        {showMessage && consent && (
          <p className="text-center mt-6 text-sm text-gray-600">
            You have {consent} cookies.
          </p>
        )}

        {/* Back to Home Button */}
        <div className="text-center mt-6 flex justify-center items-center font-kodchasan hover:text-[#f7941c] text-[#037c92]">
          <Link
            to="/"
            className="fancy-button transform hover:rotate-180 transition-all"
          >
            <span>Back to Home 🏠</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
