import Layout from "../components/Layout";
import Banner from "../components/Buggy/Banner";
import Tours from "../components/Buggy/Tours";
function Buggy() {
  return (
    <div className="page-template-default page page-id-20 mt-sm-5">
      <Layout page="buggy">
        <Banner />
        <Tours />
      </Layout>
    </div>
  );
}

export default Buggy;
