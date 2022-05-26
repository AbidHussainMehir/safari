import Layout from "../components/Layout";
import Banner from "../components/Snap/Banner";
import Tours from "../components/Snap/Tours";
import Detail from "../components/Snap/Detail";
function Snap() {
  return (
    <div className="tours-template-default single single-tours postid-172 mt-sm-5">
      <Layout page="snap">
        <Banner />
        <Detail />
        <Tours />
      </Layout>
    </div>
  );
}

export default Snap;
