import Layout from "../components/Layout";
import Banner from "../components/CamelRide/Banner";
import Tours from "../components/CamelRide/Tours";
import Detail from "../components/CamelRide/Detail";
function CamelRide() {
  return (
    <div className="tours-template-default single single-tours postid-173 mt-sm-5">
      <Layout page="camelRide">
        <Banner />
        <Detail />
        <Tours />
      </Layout>
    </div>
  );
}

export default CamelRide;
