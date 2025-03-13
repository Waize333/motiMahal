import { useState, useEffect } from "react";
import d1 from "../assets/d1.jpg";
import d2 from "../assets/d2.jpg";
import d3 from "../assets/d3.jpg";
import d4 from "../assets/d4.jpg";
import d5 from "../assets/d5.jpg";
import d6 from "../assets/d6.jpg";

const images = [d1, d2, d3, d4, d5, d6];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds for smoother effect

    return () => clearInterval(interval);
  }, []);

  return (
<div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#330e13] text-white px-4">
  {/* Text Section */}
  <div className="w-full md:w-1/3 text-center md:text-left">
    <h3 className="text-2xl md:text-3xl font-bold">Exquisite Cuisine</h3>
    <hr className="my-2 md:my-4 w-16 mx-auto md:mx-0 border-[#d6d6d5]" />
    <p className="text-sm md:text-lg">
      Moti Mahal Restaurant was founded in the 1920s by Kundan Lal Gujral, a culinary innovator with a passion for authentic Indian food.
    </p>
    <p className="text-sm md:text-lg mt-2 md:mt-4">
      Using clay ovens and unique recipes, Kundan Lal crafted delectable dishes fusing exotic spices from across the subcontinent.
    </p>
  </div>

  {/* Image Carousel */}
  <div className="relative w-full md:w-2/3 overflow-hidden">
    <div className="flex transition-transform duration-1000 ease-linear"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
      {images.map((image, index) => (
        <div key={index} className="w-full flex-shrink-0 px-2">
          <img src={image} alt={`Gallery Image ${index + 1}`}
            className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg" />
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Gallery;
