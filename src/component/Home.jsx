import FeaturedProperties from "../component/FeaturedProperties";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[85vh] flex items-center justify-center text-center px-6 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg')",
        }}
      >
        {/* Text Content */}
        <div className="relative z-20 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 mt-65 drop-shadow-lg">
            Discover Your Dream Home
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
            Explore a curated list of luxury properties that fit your lifestyle and budget.
          </p>
          <a
            href="/properties"
            className="inline-block px-8 py-3 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition shadow-md"
          >
            View Properties
          </a>
        </div>
      </section>
      {/* Featured Properties */}
      <FeaturedProperties />
    </div>
  );
}

export default Home;
