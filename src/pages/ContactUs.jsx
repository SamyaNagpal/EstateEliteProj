import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-white via-[#f4f6f9] to-[#e9eff5]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-gray-600">
            We’d love to hear from you! Whether you're curious about properties, need help, or just want to chat, our team is ready to answer all your questions.
          </p>

          <div className="text-gray-700 space-y-3">
            <p><strong>Address:</strong> 123 Luxe Street, Gurugram, India</p>
            <p><strong>Email:</strong> contact@luxeestates.in</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-8">
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
      </div>
    </section>
  );
};

export default Contact;
