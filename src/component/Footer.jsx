
// import { ChevronRight, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer >
      {/* Top Section - Locations and Newsletter */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Canada Location */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Canada</h3>
              {/* <ChevronRight className="w-5 h-5 text-gray-600" /> */}
            </div>
            <p className="text-gray-600 text-sm">
              140 Toronto Street, Toronto, XC
              <br />
              123 0R5
            </p>
          </div>

          {/* United States Location */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">United states</h3>
              {/* <ChevronRight className="w-5 h-5 text-gray-600" /> */}
            </div>
            <p className="text-gray-600 text-sm">
              140 Toronto Street, Toronto, XC
              <br />
              123 0R5
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Subscribe our newsletter</h3>
            <div className="flex gap-2">
              <div className="relative flex-1">
                {/* <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" /> */}
                <input
                  type="email"
                  placeholder="Your email"
                  className="pl-10 bg-white border-gray-200 focus:border-gray-400"
                />
              </div>
              <button className="bg-gray-800 hover:bg-gray-900 text-white px-6">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium text-gray-900 mb-6 pb-2 border-b border-gray-200">Menu</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-3">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              About Us
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home V.2
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Property
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home V.3
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Blog
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Shop
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact Us
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              License
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section with Background Image */}
      <div className="relative m-10">
        {/* Background Image */}
        <div
          className="h-52 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://cdn.prod.website-files.com/6814fc6232b8cad8fad482b3/6824284de789999fbdfc417d_Hero%20Thumb.webp')`,
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0  bg-opacity-30"></div>

          {/* Contact Email */}
          <div className="absolute left-52 bottom-0 flex items-center justify-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-white text-center">
              contact@primzhomes.com
            </h2>
          </div>
        </div>

        {/* Copyright and Social Links */}
        {/* <div className="bg-gray-50 px-4 py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© De Colorado 2025. All Rights Reserved. Powered by Webflow</p>
            <div className="flex gap-3">
              <button variant="outline" size="sm" className="text-gray-600 border-gray-300 hover:bg-gray-100">
                Instagram
              </button>
              <button variant="outline" size="sm" className="text-gray-600 border-gray-300 hover:bg-gray-100">
                Facebook
              </button>
              <button variant="outline" size="sm" className="text-gray-600 border-gray-300 hover:bg-gray-100">
                Youtube
              </button>
              <button variant="outline" size="sm" className="text-gray-600 border-gray-300 hover:bg-gray-100">
                Tiktok
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  )
}
