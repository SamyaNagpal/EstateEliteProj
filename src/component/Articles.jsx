

export default function Articles() {
  const articles = [
    {
      category: "Architecture",
      date: "May 27, 2025",
      title: "Nature meets urban design, a creative shift.",
      image: "https://primehomz.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-23-at-3.23.50-PM-pvykfkanj4j0vxdimuhlrzrlxr7lr17vdnxiklm4w0.jpeg",
      alt: "Modern beachfront house with glass walls and pool",
    },
    {
      category: "Interior",
      date: "April 1, 2025",
      title: "Blend of art and architecture in sculptural design.",
      image: "https://primehomz.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-23-at-3.23.50-PM-pvykfkanj4j0vxdimuhlrzrlxr7lr17vdnxiklm4w0.jpeg",
      alt: "Contemporary glass house with wooden elements",
    },
    {
      category: "Market",
      date: "April 1, 2025",
      title: "Must-know tips for first-time homeowners.",
      image: "https://primehomz.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-23-at-3.23.50-PM-pvykfkanj4j0vxdimuhlrzrlxr7lr17vdnxiklm4w0.jpeg",
      alt: "Modern architectural home with large windows at sunset",
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-5xl lg:text-8xl ">
            <span className="font-[WindSong]">Blog</span>
            <span className="font-sans"> & Articles</span>
          </h2>
          <button variant="outline" className="px-6 py-2 text-sm font-medium border-gray-300 border-2 rounded-4xl hover:bg-gray-100">
            SEE ALL
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="group">
              {/* Article Meta */}
              <div className="mb-4">
                <p className="text-sm  mb-3">
                  {article.category} • {article.date}
                </p>
                <h3 className="text-xl lg:text-2xl font-light  leading-tight mb-4">{article.title}</h3>
                <button className="text-sm font-medium  hover:text-gray-900 transition-colors border-b border-gray-400 hover:border-gray-700 pb-1">
                  READ MORE
                </button>
              </div>

              {/* Article Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
