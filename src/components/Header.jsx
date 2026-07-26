import React from "react";
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center">
        {/* Badge */}
        <div className="inline-flex items-center justify-center gap-2 px-6 py-1.5 mb-4 border border-bg-primary/40 bg-primary/10 rounded-full text-sm text-bg-primary">
          <p>New: AI feature integrated</p>
          <img src={assets.star_icon} alt="star" className="w-2.5"/>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-6xl text-gray-700 sm:leading-[4rem]">
          Your blogging <br /> platform
        </h1>

        {/* Description */}
        <p className="my-6 sm:my-8 max-w-2xl mx-auto max-sm:text-xs text-gray-500">
          In a world that's constantly evolving, staying curious is no longer optional—it's essential.
        </p>

        {/* Search form */}
        <form className="flex justify-center items-center">
          <input 
            type="text" 
            placeholder="Search for Blogs" 
            required 
            className="px-4 py-2 border rounded-l-full focus:outline-none"
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-6 py-2.5 rounded-r-full text-sm"
          >
            Search
          </button>
        </form>
      </div>

      {/* Background Image */}
      <img 
        src={assets.gradientBackground} 
        alt="background" 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] opacity-50"
      />
    </div>
  );
};

export default Header;
