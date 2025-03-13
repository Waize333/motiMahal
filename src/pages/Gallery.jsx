import { useState, useEffect } from "react";
import d1 from "../assets/d1.jpg";
import d2 from "../assets/d2.jpg";
import d3 from "../assets/d3.jpg";
import d4 from "../assets/d4.jpg";
import d5 from "../assets/d5.jpg";
import d6 from "../assets/d6.jpg";

const Gallery = () => {
  const images = [d1, d2, d3, d4, d5, d6];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Create an infinite loop effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Helper function to get image with circular indexing
  const getImageAtIndex = (index) => {
    // Ensure index is within bounds with circular wrapping
    const adjustedIndex = ((index % images.length) + images.length) % images.length;
    return images[adjustedIndex];
  };

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
      <div className="relative w-full md:w-2/3">
        <div className="flex flex-nowrap overflow-hidden">
          {/* Show exactly 3 images in a row */}
          <div className="w-full flex">
            {/* First image (left) */}
            <div className="w-1/3 px-2 transition-all duration-1000">
              <img
                src={getImageAtIndex(currentSlide)}
                alt="Gallery Image"
                className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Second image (middle) */}
            <div className="w-1/3 px-2 transition-all duration-1000">
              <img
                src={getImageAtIndex(currentSlide + 1)}
                alt="Gallery Image"
                className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Third image (right) */}
            <div className="w-1/3 px-2 transition-all duration-1000">
              <img
                src={getImageAtIndex(currentSlide + 2)}
                alt="Gallery Image"
                className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;