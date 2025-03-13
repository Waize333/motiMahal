const Reservations = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#120B07] px-4">
      <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl w-full max-w-md md:max-w-lg text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-[#120B07] mb-4">
          Contact and make <br /> reservations at Moti Mahal
        </h2>

        <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-lg">
          Our elegant Mughal Palace dining room is located at 343 Main Street, serving authentic North Indian cuisine.
        </p>

        {/* Form */}
        <form className="space-y-3 md:space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] outline-none"
          />
          <input
            type="date"
            placeholder="Reservation Date"
            className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] outline-none"
          />
          <textarea
            placeholder="Write your message..."
            rows="3"
            className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] outline-none"
          ></textarea>

          {/* Button */}
          <button className="w-full bg-[#400101] text-white py-2 md:py-3 rounded-lg text-lg font-semibold hover:bg-[#800000] transition">
            Reserve Table
          </button>
        </form>

        {/* Contact Info */}
        <p className="mt-4 md:mt-6 text-gray-700 text-xs md:text-sm">
          Call <span className="font-semibold">022-4567890</span> or email
          <a
            href="mailto:reservations@motimahal.com"
            className="text-[#800000] font-semibold"
          >
            reservations@motimahal.com
          </a>{" "}
          to book your table.
        </p>
      </div>
    </div>
  );
};

export default Reservations;
