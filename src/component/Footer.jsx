import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">EstateElite</h2>
          <p className="text-gray-400 text-sm">
            Bringing you premium properties across India, where luxury meets comfort.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/properties" className="hover:text-white transition">Properties</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm">Gurgaon, India</p>
          <p className="text-gray-400 text-sm mt-1">+91 98765 43210</p>
          <p className="text-gray-400 text-sm mt-1">info@estateelite.in</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">X</a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-600 text-sm mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} EstateElite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
