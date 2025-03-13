import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 bg-opacity-70 text-white text-center py-4">
      <p className="text-sm">© 2025 Moti Mahal | Authentic Indian Cuisine</p>
      <div className="flex justify-center gap-6 mt-2">
        <a href="#" className="text-blue-500 text-xl hover:opacity-80">
          <FaFacebook />
        </a>
        <a href="#" className="text-pink-500 text-xl hover:opacity-80">
          <FaInstagram />
        </a>
        <a href="#" className="text-blue-400 text-xl hover:opacity-80">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
