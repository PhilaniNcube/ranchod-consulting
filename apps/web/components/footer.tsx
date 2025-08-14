import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Ranchod Consulting</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Professional consultants for the SMME business sector, established
              in 2003 with a commitment to excellence and innovation.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Due Diligence
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Business Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Training & Mentoring
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Strategic Planning
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-gray-200">
              <p className="font-medium text-white">Sanjiv Ranchod</p>
              <p>📧 info@ranchodconsulting.co.za</p>
              <p>📞 +27 (0)41 368 5700</p>
              <p>📱 +27 (0)83 629 4050</p>
              <p>� 086 512 4870</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-200">
              © {new Date().getFullYear()} Ranchod Consulting. All rights
              reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-200 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-200 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
