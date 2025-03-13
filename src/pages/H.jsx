import r1 from "../assets/r1.jpg"; // Background image
import logo from "../assets/l1.jpg"; // Logo image
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const H = () => {
  return (
    <div id="home" className="relative h-screen flex flex-col items-center overflow-hidden">
  {/* Navbar */}
  <div className="absolute top-4 left-4 w-full flex items-center justify-between px-6 md:px-10 z-50">
    <img src={logo} alt="Moti Mahal Logo" width="60" className="shadow-lg rounded" />
    
    {/* Responsive Navbar */}
    <ul className="hidden md:flex space-x-4 text-lg text-[#e0e0e0]">
      <li><a href="#home" className="hover:text-[#390208]">Home</a></li>
      <li><a href="#menu" className="hover:text-[#390208]">Menu</a></li>
      <li><a href="#gallery" className="hover:text-[#390208]">Gallery</a></li>
      <li><a href="#reservations" className="hover:text-[#390208]">Reservations</a></li>
      <li><a href="#contact" className="hover:text-[#390208]">Contact</a></li>
    </ul>

    {/* Mobile Menu Button (Optional) */}
  </div>

  {/* Background Image */}
  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
    style={{ backgroundImage: `url(${r1})` }}></div>

  <div className="absolute inset-0 bg-black opacity-50"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col justify-center h-full text-white px-4 text-center">
    <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
      MOTI MAHAL
    </h1>
    <div className="w-24 md:w-[45rem] h-1 bg-white my-6 mx-auto"></div>
    <p className="text-sm md:text-lg font-light max-w-[90%] md:max-w-[50%] mx-auto">
      EXPERIENCE THE RICH CULINARY TREASURES OF THE MUGHAL EMPIRE IN OUR ELEGANT RESTAURANT FILLED WITH IMPERIAL AMBIANCE.
    </p>
  </div>

  {/* Contact Info */}
  <div className="absolute bottom-6 right-6 text-right hidden md:flex flex-col space-y-3 text-lg">
    <div className="flex items-center justify-end space-x-2">
      <span className="text-white">Call Now</span>
      <FaPhoneAlt className="text-white" />
    </div>
    <div className="flex items-center justify-end space-x-2">
      <div className="text-white">
        <p>555 Main St</p>
      </div>
      <FaMapMarkerAlt className="text-white" />
    </div>
  </div>
</div>

  );
};

export default H;
