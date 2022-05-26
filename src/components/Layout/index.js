import Header from "./header";
import Nav from "./nav";
import Footer from "./footer";
export default function Layout({ children, page }) {
  return (
    <div>
      {" "}
      <Header />
      <Nav page={page} />
      {children}
      <Footer />
    </div>
  );
}
