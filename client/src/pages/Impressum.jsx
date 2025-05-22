import { Link } from "react-router-dom";
import BackgroundColour from "../components/BackgroundColour.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Impressum = () => {
  return (
    <div className="bg-white text-[#037c92] font-kodchasan relative">
      {/* Background - ensure it's positioned correctly */}
      <div className="fixed inset-0 -z-10">
        <BackgroundColour />
      </div>

      <Navbar />

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 sm:px-8 pt-24 pb-16">
        <h1 className="text-2xl font-bold mb-4 sm:text-3xl">Impressum</h1>

        <p className="mb-4 text-gray-600 text-sm sm:text-base text-center sm:text-left">
          This page contains the legally required information about the owner of
          this website, as per German Telemedia Act (TMG).
        </p>

        <section className="space-y-6 text-gray-600 text-sm sm:text-base">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl text-[#037c92]">
              Website Owner
            </h2>
            <p>
              Shirin Hajiesmaeili
              <br />
              Brunnenstraße 193
              <br />
              10119 Berlin, Germany
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold sm:text-2xl text-[#037c92]">
              Contact Information
            </h2>
            <p>
              Email: info@itin-tech.com
              <br />
              Phone: +49 176 641 71040
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold sm:text-2xl text-[#037c92]">
              Responsible for Content
            </h2>
            <p>
              Shirin Hajiesmaeili
              <br />
              Address as listed above
              <br />
              According to § 55 Abs. 2 RStV
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold sm:text-2xl text-[#037c92]">
              Disclaimer
            </h2>
            <p>
              Despite careful content control, we assume no liability for the
              content of external links. The operators of the linked pages are
              solely responsible for their content.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold sm:text-2xl text-[#037c92]">
              Copyright
            </h2>
            <p>
              All content on this website is the property of the owner and may
              not be copied or reused without explicit permission.
            </p>
          </div>
        </section>

        <p className="text-sm text-gray-600 mt-6 text-center sm:text-left">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        {/* Back to Home */}
        <div className="text-center mt-6 flex justify-center items-center hover:text-[#f7941c] text-[#037c92]">
          <Link
            to="/"
            className="fancy-button transform hover:rotate-180 transition-all"
          >
            <span>Back to Home 🏠</span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Impressum;
