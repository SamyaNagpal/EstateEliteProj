import React from "react";

const properties = [
  {
    id: 1,
    title: "Modern Villa in Gurgaon",
    location: "DLF Phase 5",
    price: "₹3.5 Cr",
    image: "https://th.bing.com/th/id/OIP.QWMIViQYC6JXNptLs01NTgHaEl?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
  },
  {
    id: 2,
    title: "Luxury Apartment in Mumbai",
    location: "Bandra West",
    price: "₹2.2 Cr",
    image: "https://th.bing.com/th/id/OIP.NkRRVg_8TobOkKnWNTN2vgHaE8?w=277&h=185&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  },
  {
    id: 3,
    title: "Beach House in Goa",
    location: "Anjuna Beach",
    price: "₹1.9 Cr",
    image: "https://th.bing.com/th/id/OIP._BUYFCuZ61ui1f1OfStJKwHaE8?w=281&h=187&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  },
];

const FeaturedProperties = () => {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2
          className="text-4xl font-semibold text-gray-800"
          data-aos="fade-up"
        >
          Featured Properties
        </h2>
        <p
          className="mt-2 text-gray-500"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Handpicked listings curated for luxury living
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        {properties.map((property, index) => (
          <div
            key={property.id}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="shadow-xl rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{property.title}</h3>
              <p className="text-gray-500">{property.location}</p>
              <p className="mt-2 font-bold text-indigo-600">{property.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;
