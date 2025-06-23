export default function Contact() {
  return (
    <div className="min-h-screen bg-[#3B3E2D] text-white">
      <div className="container mx-auto px-8 py-16 lg:px-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - Contact heading */}
          <div className="flex items-start">
            <h1 className="text-6xl lg:text-8xl font-light tracking-tight">Contact</h1>
          </div>

          {/* Right side - Mission and contact details */}
          <div className="space-y-16">
            {/* Mission statement */}
            <div className="max-w-lg">
              <p className="text-lg lg:text-xl leading-relaxed font-light">
                Our mission is to create residential and mixed-use communities that enhance, strengthen, and contribute
                to the greater fabric of existing areas.
              </p>
            </div>

            {/* Contact information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact info */}
              <div className="space-y-4">
                <h2 className="text-xl font-medium">Contact info</h2>
                <div className="space-y-2">
                  <p className="text-lg font-light">+001 800 600 00</p>
                  <p className="text-lg font-light">hello@decolorado.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-4">
                <h2 className="text-xl font-medium">Address</h2>
                <div className="space-y-1">
                  <p className="text-lg font-light">245 Maple Avenue</p>
                  <p className="text-lg font-light">Springfield, IL 62704</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form section */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - Or let's talk heading */}
          <div className="flex items-start">
            <h2 className="text-5xl lg:text-7xl font-light tracking-tight">Or let's talk</h2>
          </div>

          {/* Right side - Form */}
          <div className="space-y-8">
            {/* Form description */}
            <p className="text-lg lg:text-xl leading-relaxed font-light max-w-lg">
              Get in touch with our support team and with any questions or queries you may have.
            </p>

            {/* Contact form */}
            <form className="space-y-6">
              {/* First name */}
              <div>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full bg-transparent border-b border-white/30 pb-3 text-lg font-light placeholder-white/70 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              {/* Last name */}
              <div>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full bg-transparent border-b border-white/30 pb-3 text-lg font-light placeholder-white/70 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              {/* Phone number */}
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full bg-transparent border-b border-white/30 pb-3 pr-10 text-lg font-light placeholder-white/70 focus:border-white focus:outline-none transition-colors"
                />
                <div className="absolute right-0 bottom-3">
                  <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-white/30 pb-3 text-lg font-light placeholder-white/70 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              {/* Interest checkboxes */}
              <div className="space-y-4 pt-4">
                <p className="text-lg font-light">I'm interested in?</p>
                <div className="flex flex-wrap gap-6">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 bg-transparent border border-white/50 rounded-sm checked:bg-white checked:border-white focus:outline-none focus:ring-1 focus:ring-white/50"
                    />
                    <span className="text-lg font-light">Buying</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 bg-transparent border border-white/50 rounded-sm checked:bg-white checked:border-white focus:outline-none focus:ring-1 focus:ring-white/50"
                    />
                    <span className="text-lg font-light">Selling</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 bg-transparent border border-white/50 rounded-sm checked:bg-white checked:border-white focus:outline-none focus:ring-1 focus:ring-white/50"
                    />
                    <span className="text-lg font-light">Information request</span>
                  </label>
                </div>
              </div>

              {/* Help text area */}
              <div className="pt-4">
                <textarea
                  placeholder="I need help with..."
                  rows={4}
                  className="w-full bg-transparent border-b border-white/30 pb-3 text-lg font-light placeholder-white/70 focus:border-white focus:outline-none transition-colors resize-none"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
