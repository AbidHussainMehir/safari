import Layout from "../../components/Layout";
import Banner from "../../components/ToursQuadBiking/Banner";
import Detail from "../../components/ToursQuadBiking/Detail";
import Tours from "../../components/ToursQuadBiking/Tours";

function ToursQuadBiking() {
  return (
    <div className="tours-template-default single single-tours postid-200 mt-sm-5">
      <Layout page="tours-quad-biking">
        <Banner />
        <Detail />
        <Tours />
      </Layout>
    </div>
  );
}
export default ToursQuadBiking;
