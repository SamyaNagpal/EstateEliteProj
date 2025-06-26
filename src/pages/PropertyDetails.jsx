import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const dummyProperty = {
  title: "Hilltop Mansion",
  location: "Shimla",
  price: "₹4.2 Cr",
  image: "https://i.pinimg.com/originals/95/29/91/952991594aa478fa2232553e4eb8757d.jpg",
  description:
    "This luxurious hilltop mansion offers breathtaking views of the valley. Featuring 5 bedrooms, 6 bathrooms, an infinity pool, and modern interiors—perfect for elite living.",
  features: ["5 Bedrooms", "6 Bathrooms", "Infinity Pool", "Private Garden", "Smart Home Integration"],
};

const PropertyDetails = () => {
  const { id } = useParams();

  return (
    <section className="bg-gradient-to-br from-white to-gray-100 min-h-screen pt-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Image */}
        <motion.img
          src={dummyProperty.image}
          alt={dummyProperty.title}
          className="w-full h-[400px] object-cover rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Info Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{dummyProperty.title}</h1>
            <p className="text-lg text-gray-500">{dummyProperty.location}</p>
            <p className="mt-4 text-2xl text-indigo-600 font-semibold">{dummyProperty.price}</p>

            {/* Description */}
            <p className="mt-6 text-gray-700 leading-relaxed">{dummyProperty.description}</p>

            {/* Features */}
            <motion.div
              className="mt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15 }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Features:</h3>
              <ul className="grid grid-cols-2 gap-2 text-gray-600">
                {dummyProperty.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <span className="text-indigo-500">✓</span> {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form Panel */}
          <motion.div
            className="bg-white shadow-lg rounded-xl p-6 h-fit"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Schedule a Visit</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Request Visit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
