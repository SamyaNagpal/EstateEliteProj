import React from "react";

const About = () => {
  return (
    <section className="py-20 px-6 bg-white">

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight" data-aos="fade-up">
            Crafted for Luxury, Built on Trust
          </h1>
          <p
            className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            EstateElite is India’s most refined real estate experience—where luxury meets precision and service meets sincerity.
          </p>
        </div>

        {/* Content Row */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative" data-aos="fade-right">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://plus.unsplash.com/premium_photo-1733514432701-8bd4f8d2a1a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU0fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D"
                alt="About Us"
                className="object-cover w-full h-[420px] transform hover:scale-105 transition duration-500"
              />
            </div>
            {/* Decorative Border */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-gray-100 rounded-3xl z-[-1]"></div>
          </div>

          {/* Text */}
          <div data-aos="fade-left">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              We handpick the finest properties across India — beach villas, city penthouses, and peaceful retreats — and offer them through a platform designed for ease, trust, and elegance.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-8">Our Core Values</h3>
            <ul className="text-gray-600 space-y-2 text-base pl-5 list-disc">
              <li>Curated Luxury Only – every home is selected for its uniqueness</li>
              <li>End-to-End Support – from discovery to documentation</li>
              <li>Transparency & Verified Listings</li>
              <li>Client-First Approach — always</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
