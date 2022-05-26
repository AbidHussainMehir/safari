import Banner from "../components/Home/Banner";
import Tours from "../components/Home/Tours";
import Contact from "../components/Home/Contact";
import Highlights from "../components/Home/Highlights";
import Gallery from "../components/Home/Gallery";
import Review from "../components/Home/Review";
import Customer from "../components/Home/Customer";
import Layout from "../components/Layout";

function Home() {
  return (
    <div className="home page-template-default page page-id-8 mt-sm-5">
      <Layout page="home">
        <Banner />
        <Tours />
        <Contact />
        <Highlights />
        <Gallery />
        <Review />
        <Customer />
      </Layout>
    </div>
  );
}

export default Home;
