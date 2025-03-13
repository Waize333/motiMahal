const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] bg-[#FEF8F5] px-4">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#120B07] mb-4">
        Follow us for the latest updates
      </h2>

      {/* Email Subscription Form */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 w-full max-w-lg">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full sm:w-auto flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800000] outline-none"
        />
        <button className="bg-[#400101] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#800000] transition">
          Get our weekly menu
        </button>
      </div>
    </div>
  );
};

export default Contact;
