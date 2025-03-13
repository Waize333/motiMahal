import r1 from "../assets/r1.jpg"; // Background image
import logo from "../assets/l1.jpg"; // Logo image
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const H = () => {
  return (
    <div id="home" className="relative h-screen flex flex-col items-center overflow-hidden">
      {/* Top Navigation Bar */}
      <div className="absolute top-4 left-4 w-full flex items-center justify-between px-10 z-50">
        {/* Logo */}
        <img src={logo} alt="Moti Mahal Logo" width="80" className="shadow-lg rounded" />

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-lg text-[#e0e0e0]">
          <li><a href="#home" className="hover:text-[#390208]">Home</a></li>
          <li><a href="#menu" className="hover:text-[#390208]">Menu</a></li>
          <li><a href="#gallery" className="hover:text-[#390208]">Gallery</a></li>
          <li><a href="#reservations" className="hover:text-[#390208]">Reservations</a></li>
          <li><a href="#contact" className="hover:text-[#390208]">Contact</a></li>
        </ul>

        {/* Reserve Table Button */}
        <a href="#reservations" className="bg-[#390208] text-white px-4 py-2 rounded-md hover:bg-[#5a0210] transition-all duration-300">
          Reserve Table
        </a>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
        style={{ backgroundImage: `url(${r1})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full flex flex-col justify-between h-full text-white px-10">
        {/* Top Section - Moti Mahal & Description */}
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-[6rem] font-extrabold tracking-wide text-white drop-shadow-lg" style={{ fontFamily: '"Poppins", sans-serif' }}>
            MOTI MAHAL
          </h1>
          <div className="w-[45rem] h-[4px] bg-white my-6"></div>
          <p className="text-lg font-light max-w-[50%] text-white" style={{ fontFamily: '"Poppins", sans-serif' }}>
            EXPERIENCE THE RICH CULINARY TREASURES OF THE MUGHAL EMPIRE IN OUR
            ELEGANT RESTAURANT FILLED WITH IMPERIAL AMBIANCE.
          </p>
        </div>

        {/* Bottom Right - Call Now & Address */}
        <div className="flex flex-col space-y-3 text-lg absolute bottom-8 right-10 text-right">
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
    </div>
  );
};

export default H;
