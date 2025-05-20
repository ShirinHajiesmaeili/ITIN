import { Link } from "react-router-dom";
import BackgroundColour from "../components/BackgroundColour.jsx"; // Import BackgroundColour
import Navbar from "../components/Navbar.jsx";

const PrivacyPolicy = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-[#037c92] font-kodchasan">
      {/* BackgroundColour Component */}
      <BackgroundColour />
      <Navbar />

      <div className="relative z-10 max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center sm:text-left">
          Privacy Policy
        </h1>

        <p className="mb-4 text-sm sm:text-base text-gray-600 font-kodchasan">
          At iTiN, accessible from www.itin.com, the privacy of our visitors is
          of paramount importance to us. This Privacy Policy document outlines
          the types of personal information that is collected and recorded by
          iTiN and how we use it.
        </p>

        <h2 className="font-semibold text-lg sm:text-xl mt-6">
          1. Data Controller Information
        </h2>
        <p className="mb-4 text-sm sm:text-base text-gray-600 font-kodchasan">
          The controller responsible for processing your personal data is:
        </p>
        <p className="mb-4 text-sm sm:text-base text-gray-600 font-kodchasan">
          <strong>iTiN</strong>
          <br />
          Owner: Shirin Hajiesmaeili
          <br />
          Address: Brunnenstraße 193, 10119 Berlin, Germany
          <br />
          Email: info@itin-tech.com
          <br />
          Phone: +49 176 641 71040
        </p>

        <h2 className="font-semibold text-lg sm:text-xl mt-6">
          2. Types of Data We Collect
        </h2>
        <p className="mb-4 text-sm sm:text-base text-gray-600 font-kodchasan">
          We may collect and process the following types of personal data:
        </p>
        <ul className="ml-6 mb-4 text-sm sm:text-base text-gray-600 font-kodchasan">
          <li>
            Personal Identification Information: Name, email address, phone
            number
          </li>
          <li>
            Technical Data: IP address, browser type, operating system, device
            information
          </li>
          <li>
            Usage Data: Pages visited, duration on the website, interactions
            with site elements
          </li>
          <li>
            Marketing and Communication Data: Preferences in receiving marketing
            communications
          </li>
        </ul>

        <h2 className="font-semibold text-lg sm:text-xl mt-6">
          3. How We Use Your Data
        </h2>
        <p className="mb-4 text-sm sm:text-base text-gray-600 font-kodchasan">
          We process your personal data for the following purposes:
        </p>
        <ul className="ml-6 mb-4 text-sm sm:text-base text-gray-600 font-kodchasan">
          <li>To provide and maintain our website and services</li>
          <li>To improve user experience</li>
          <li>To communicate with you</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="font-semibold text-lg sm:text-xl mt-6">
          4. Legal Basis for Data Processing
        </h2>
        <p className="mb-4 text-sm sm:text-base text-gray-600 font-kodchasan">
          We process your personal data based on the following legal grounds:
        </p>
        <ul className="ml-6 mb-4 text-sm sm:text-base text-gray-600 font-kodchasan">
          <li>Your consent (Article 6(1)(a) GDPR)</li>
          <li>Contractual necessity (Article 6(1)(b) GDPR)</li>
          <li>Legitimate interests (Article 6(1)(f) GDPR)</li>
        </ul>

        <h2 className="font-semibold text-lg sm:text-xl mt-6">
          5. Cookies and Tracking Technologies
        </h2>
        <p className="mb-4 text-sm sm:text-base text-gray-600 font-kodchasan">
          We use cookies to enhance your browsing experience. You can control
          cookie settings in your browser or through our cookie consent tool.
        </p>

        <h2 className="font-semibold text-lg sm:text-xl mt-6">
          6. Third-Party Data Sharing
        </h2>
        <p className="mb-4 text-sm sm:text-base text-gray-600 font-kodchasan">
          We may share your personal data with third-party service providers for
          analytics, payments, and legal obligations.
        </p>

        <h2 className="font-semibold text-lg sm:text-xl mt-6">
          7. Data Retention
        </h2>
        <p className="mb-4 text-sm sm:text-base text-gray-600 font-kodchasan">
          We retain your personal data only for as long as necessary for the
          purposes set out in this privacy policy or as required by law.
        </p>

        <h2 className="font-semibold text-lg sm:text-xl mt-6">
          8. Your Rights
        </h2>
        <p className="mb-4 text-sm sm:text-base text-gray-600 font-kodchasan">
          You have the right to access, rectify, erase, restrict, and object to
          the processing of your personal data, among other rights. Please
          contact us to exercise these rights.
        </p>

        <h2 className="font-semibold text-lg sm:text-xl mt-6">
          9. Security of Your Data
        </h2>
        <p className="mb-4 text-sm sm:text-base text-gray-600 font-kodchasan">
          We employ appropriate technical and organizational measures to protect
          your data from unauthorized access.
        </p>

        <h2 className="font-semibold text-lg sm:text-xl mt-6">
          10. Changes to This Privacy Policy
        </h2>
        <p className="mb-4 text-sm sm:text-base text-gray-600 font-kodchasan">
          We may update this privacy policy from time to time. The latest
          version will always be available on this page.
        </p>

        <h2 className="font-semibold text-lg sm:text-xl mt-6">
          11. Contact Us
        </h2>
        <p className="mb-4 text-sm sm:text-base text-gray-600 font-kodchasan">
          If you have any questions, please contact us at:
        </p>
        <p className="mb-4 text-sm sm:text-base text-gray-600 font-kodchasan">
          Email: info@itin-tech.com
          <br />
          Phone: +49 176 641 71040
        </p>

        <p className="text-sm text-gray-600 mt-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>

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

export default PrivacyPolicy;
