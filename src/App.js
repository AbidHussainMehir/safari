import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Tours from "./pages/tours";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Buggy from "./pages/buggy";
import QBiking from "./pages/qBiking";
import CamelRide from "./pages/camelRide";
import Snap from "./pages/snap";
import ToursBuggy from "./pages/tours/toursBuggy";
import Tours307 from "./pages/tours/tours307";
import ToursQuadBiking from "./pages/tours/toursQuadBiking";
import ToursQuadBiking800 from "./pages/tours/toursQuadBiking800";
import ToursQuadBiking1000 from "./pages/tours/toursQuadBiking1000";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/tour" element={<Tours />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/buggy" element={<Buggy />} />
        <Route path="/quad-biking" element={<QBiking />} />
        <Route path="/tours/camel-ride" element={<CamelRide />} />
        <Route path="/tours/take-a-snap-with-falcon" element={<Snap />} />
        <Route path="/tours/buggy" element={<ToursBuggy />} />
        <Route path="/tours/307" element={<Tours307 />} />
        <Route path="/tours/quad-biking" element={<ToursQuadBiking />} />
        <Route path="/tours/quad-biking-800" element={<ToursQuadBiking800 />} />
        <Route
          path="/tours/quad-biking-1000"
          element={<ToursQuadBiking1000 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
