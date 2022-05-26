import Layout from "../components/Layout";
import Banner from "../components/Qbiking/Banner";
import Tours from "../components/Qbiking/Tours";
function QBiking() {
  return (
    <div className="page-template page-template-page-qbuggy page-template-page-qbuggy-php page page-id-144 mt-sm-5">
      <Layout page="qBiking">
        <Banner />
        <Tours />
      </Layout>
    </div>
  );
}

export default QBiking;
