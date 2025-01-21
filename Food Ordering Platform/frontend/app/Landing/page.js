

import Navbar from "@/components/landing/nav";
import Dashbord from "@/components/landing/dashbord";
import Footer from "@/components/footer";


const LandingPage = () => {
  return (
    <>
      <div>
        <section id="home_section">
          <Navbar />
          <Dashbord/>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default LandingPage;
