import React from "react";
import { footer_data } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-10 px-6">
      {/* Footer sections */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {footer_data.map((section, index) => (
          <div key={index}>
            <h3 className="text-white font-semibold mb-4 text-lg">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a
                    href= "#"
                    className="hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer bottom */}
      <p className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
