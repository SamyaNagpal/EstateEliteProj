import React from "react";
import { Link } from "react-router-dom";

const properties = [
  {
    id: 1,
    title: "Hilltop Mansion",
    location: "Shimla",
    price: "₹4.2 Cr",
    image: "https://i.pinimg.com/originals/95/29/91/952991594aa478fa2232553e4eb8757d.jpg",
  },
  {
    id: 2,
    title: "Penthouse in Pune",
    location: "Koregaon Park",
    price: "₹3.1 Cr",
    image: "https://th.bing.com/th/id/OIP.Dyi60k9DnsxvbInpMyBMqgHaEJ?w=309&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  },
  {
    id: 3,
    title: "Farmhouse Retreat",
    location: "Jaipur",
    price: "₹2.4 Cr",
    image: "https://eycrk5cno2n.exactdn.com/wp-content/uploads/2022/02/The-Importance-of-High-Quality-Real-Estate-Photos-v3.jpg",
  },
  {
    id: 4,
    title: "Skyline View Apartment",
    location: "Bangalore",
    price: "₹2.9 Cr",
    image: "https://th.bing.com/th/id/OIP.qljk19JWLbjLTNXWKAgyxwHaEa?w=315&h=187&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
  },
  {
    id: 5,
    title: "Beachfront Villa",
    location: "Goa",
    price: "₹3.8 Cr",
    image: "https://th.bing.com/th/id/OIP.2cW-PfhAepSaQO0v9SWilAHaEo?w=300&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    id: 6,
    title: "Golf View Home",
    location: "Noida",
    price: "₹2.6 Cr",
    image: "https://th.bing.com/th/id/OIP._yC174sEBWELImhmt0sS8gHaE2?w=282&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
];

const Properties = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f0f4f8] via-white to-[#f0f4f8] py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">Explore Properties</h2>
        <p className="text-gray-600 mt-2">
          Curated collection of high-end residences for modern living
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 flex flex-col justify-between min-h-[200px]">

              <div>
                <h3 className="text-xl font-semibold text-gray-800">{property.title}</h3>
                <p className="text-gray-500">{property.location}</p>
                <p className="mt-2 text-lg font-bold text-indigo-600">{property.price}</p>
              </div>
              <div className="mt-4">
                <Link
                  to={`/properties/${property.id}`}
                  className="block text-center w-full px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Properties;