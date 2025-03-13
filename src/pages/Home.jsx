import H from "./H"; // ✅ Hero Section (No Navbar inside)
import Gallery from "./Gallery";
import Menu from "./Menu";
import Reservations from "./Reservations";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="bg-[#F5F5DC] text-[#4b2e2e]">
      {/* Sections */}
      <div id="home"><H /></div>
      <div id="gallery"><Gallery /></div>
      {/*<div id="menu"><Menu /></div>*/}
      <div id="reservations"><Reservations /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
};

export default Home;
