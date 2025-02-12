import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa';
import walamenLogo from '../assets/images/walamenLogo.png';

export default function Footer() {
  const socialLinks = [
    { Icon: FaFacebookF, href: '#facebook', label: 'Facebook' },
    { Icon: FaTwitter, href: '#twitter', label: 'Twitter' },
    { Icon: FaLinkedinIn, href: '#linkedin', label: 'LinkedIn' },
    { Icon: FaInstagram, href: '#instagram', label: 'Instagram' }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img
                src={walamenLogo}
                alt="Walamen Logo"
                className="h-[100px] w-[250px] object-contain"
              />
            </Link>
            <p className="text-gray-300 mb-6">
              Pioneering sustainable solutions across industries, driving innovation and transformation for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/industries" className="text-gray-300 hover:text-white">Industries</Link></li>
              <li><Link to="/insights" className="text-gray-300 hover:text-white">Insights</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-bold text-lg mb-4">Industries</h4>
            <ul className="space-y-2">
              <li><Link to="/industries/healthcare" className="text-gray-300 hover:text-white">Social Sector</Link></li>
              <li><Link to="/industries/technology" className="text-gray-300 hover:text-white">Technology</Link></li>
              <li><Link to="/industries/finance" className="text-gray-300 hover:text-white">Logistic and Infrastructure</Link></li>
              <li><Link to="/industries/education" className="text-gray-300 hover:text-white">Education</Link></li>
              <li><Link to="/industries/manufacturing" className="text-gray-300 hover:text-white">Agriculture</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Stay Connected</h4>
            <p className="text-gray-300 mb-4">Receive Walamen insights and event invitations on topics relevant to your business and role.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Walamen. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/terms" className="text-gray-300 hover:text-white">Terms of Use & Disclosures</Link>
              <Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
              <Link to="/accessibility" className="text-gray-300 hover:text-white">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}