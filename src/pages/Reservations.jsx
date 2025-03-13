const Reservations = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#120B07] px-4">
      <div className="bg-white p-10 rounded-lg shadow-xl max-w-lg w-full text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#120B07] mb-4">
          Contact and make <br /> reservations at Moti Mahal
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-6 text-lg">
          Our elegant Mughal Palace dining room is located at 343 Main Street,
          serving authentic North Indian cuisine in a royal Mughal-style ambiance.
          Reservations recommended.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] outline-none"
          />
          <input
            type="text"
            placeholder="Email Subject"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] outline-none"
          />
          <textarea
            placeholder="Write your message..."
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] outline-none"
          ></textarea>

          {/* Button */}
          <button className="w-full bg-[#400101] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#800000] transition">
            Contact Us
          </button>
        </form>

        {/* Contact Info */}
        <p className="mt-6 text-gray-700 text-sm">
          Call <span className="font-semibold">022-4567890</span> or email{" "}
          <a href="mailto:reservations@motimahal.com" className="text-[#800000] font-semibold">
            reservations@motimahal.com
          </a>{" "}
          to book your table.
        </p>
      </div>
    </div>
  );
};

export default Reservations;
