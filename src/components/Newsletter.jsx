import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center my-12 px-4">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
        Never Miss a Blog
      </h2>
      <p className="text-gray-500 mt-2 mb-6">
        Subscribe to get the latest blogs
      </p>

      {/* Form */}
      <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12 border rounded-full overflow-hidden shadow-sm">
        <input
          className="flex-grow px-4 py-2 text-sm outline-none"
          type="email"
          placeholder="Enter your E-mail id"
          required/>
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 text-sm font-medium hover:bg-primary/80 transition">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
