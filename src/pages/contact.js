import Layout from "../components/Layout";
import Banner from "../components/Contact/Banner";
import Form from "../components/Contact/Form";
import Iframe from "../components/Contact/Iframe";

function Contact() {
  return (
    <div className="page-template page-template-contact page-template-contact-php page page-id-16 mt-sm-5">
      <Layout page="contact">
        <Banner />
        <Form />
        <Iframe />
      </Layout>
    </div>
  );
}

export default Contact;
