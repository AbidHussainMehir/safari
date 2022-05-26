import Layout from "../../components/Layout";
import Banner from "../../components/Tours307/Banner";
import Detail from "../../components/Tours307/Detail";
import Tours from "../../components/Tours307/Tours";

function Tours307() {
  return (
    <div className="tours-template-default single single-tours postid-307 mt-sm-5">
      <Layout page="tours-307">
        <Banner />
        <Detail />
        <Tours />
      </Layout>
    </div>
  );
}
export default Tours307;
