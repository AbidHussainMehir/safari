import Layout from "../components/Layout";
import Banner from "../components/Tours/Banner";
import Buggy from "../components/Tours/Buggy";

function Tours() {
  return (
    <div className="page-template-default page page-id-12 mt-sm-5">
      <Layout page="tours">
        <Banner />
        <Buggy />
      </Layout>
    </div>
  );
}

export default Tours;
