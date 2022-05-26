import Layout from "../components/Layout";
import Banner from "../components/Gallery/Banner";
import GallerySection from "../components/Gallery/Gallery";

function Gallery() {
  return (
    <div className="page-template page-template-gallery page-template-gallery-php page page-id-14 mt-sm-5">
      <Layout page="gallery">
        <Banner />
        <GallerySection />
      </Layout>
    </div>
  );
}

export default Gallery;
