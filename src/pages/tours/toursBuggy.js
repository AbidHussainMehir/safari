import Layout from "../../components/Layout";
import Banner from "../../components/ToursBuggy/Banner";
import Detail from "../../components/ToursBuggy/Detail";
import Tours from "../../components/ToursBuggy/Tours";

function ToursBuggy() {
  return (
    <div className="tours-template-default single single-tours postid-84 mt-sm-5">
      <Layout page="tours-buggy">
        <Banner />
        <Detail />
        <Tours />
      </Layout>
    </div>
  );
}
export default ToursBuggy;
