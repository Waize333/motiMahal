import { useState, useEffect } from "react"; 
import logo from "../assets/l1.jpg"; // ✅ Import logo correctly

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-[#390208] shadow-md" : "bg-transparent"
      }`}
      style={{ position: "fixed", top: 0, width: "100%" }} // ✅ Ensures it stays at top
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Left: Logo */}
        <a href="#" className="flex-shrink-0">
          <img src={logo} alt="Moti Mahal Logo" width="100" className="cursor-pointer" />
        </a>

        {/* Middle: Navbar Links */}
        <ul className="hidden md:flex space-x-6 text-lg text-[#e0e0e0]">
          <li><a href="#home" className="hover:text-[#390208]">Home</a></li>
          <li><a href="#menu" className="hover:text-[#390208]">Menu</a></li>
          <li><a href="#gallery" className="hover:text-[#390208]">Gallery</a></li>
          <li><a href="#reservations" className="hover:text-[#390208]">Reservations</a></li>
          <li><a href="#contact" className="hover:text-[#390208]">Contact</a></li>
        </ul>

        {/* Right: Reserve Table Button */}
        <a
          href="#reservations"
          className="hidden md:inline-block bg-[#390208] text-white px-4 py-2 rounded-md hover:bg-[#5a0210] transition-all duration-300"
        >
          Reserve Table
        </a>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none ml-auto"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`absolute top-16 left-0 w-full bg-[#1a1a1a] p-4 md:hidden ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col space-y-4 text-lg text-white">
            <li><a href="#home" onClick={() => setIsOpen(false)} className="hover:text-[#390208]">Home</a></li>
            <li><a href="#menu" onClick={() => setIsOpen(false)} className="hover:text-[#390208]">Menu</a></li>
            <li><a href="#gallery" onClick={() => setIsOpen(false)} className="hover:text-[#390208]">Gallery</a></li>
            <li><a href="#reservations" onClick={() => setIsOpen(false)} className="hover:text-[#390208]">Reservations</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-[#390208]">Contact</a></li>
            <li>
              <a href="#reservations" onClick={() => setIsOpen(false)} className="block bg-[#390208] text-white px-4 py-2 rounded-md text-center hover:bg-[#5a0210] transition-all duration-300">
                Reserve Table
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
