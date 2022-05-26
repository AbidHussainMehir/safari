import Banner from "../components/About/Banner";
import AboutSection from "../components/About/About";
import WhyChoose from "../components/About/WhyChoose";
import Trip from "../components/About/Trip";
import Gallery from "../components/About/Gallery";
import Layout from "../components/Layout";
function About() {
  return (
    <div className="page-template page-template-aboutus page-template-aboutus-php page page-id-10 mt-sm-5">
      <Layout page="about">
        <Banner />
        <AboutSection />
        <WhyChoose />
        <Trip />
        <Gallery />
      </Layout>
    </div>
  );
}

export default About;
