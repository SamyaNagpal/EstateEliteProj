import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 mt-4 text-lg">
            We’d love to hear from you! Whether you’re curious about properties or just want to say hi.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-xl p-10 space-y-8">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Bottom Section - Map + Socials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <div className="w-full h-80 rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=gurugram&output=embed"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info & Socials */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-indigo-600 text-xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600">123 Luxe Street, Gurugram, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-indigo-600 text-xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">contact@luxeestates.in</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-indigo-600 text-xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Connect with us</h4>
              <div className="flex gap-6 text-2xl text-gray-500">
                <a href="#" className="hover:text-indigo-600"><FaInstagram /></a>
                <a href="#" className="hover:text-indigo-600"><FaLinkedin /></a>
                <a href="#" className="hover:text-indigo-600"><FaWhatsapp /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
