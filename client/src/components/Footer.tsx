import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa';
import walamenLogo from '../assets/images/walamenLogo.png';
import { useLoading } from '../LoadContext'; // Import the global loading context
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import skeleton styles

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { loading, setLoading } = useLoading(); // Use global loading state

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Function to submit the form and make the API request 
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set global loading state to true

    try {
      const response = await axios.post('https://walamen.com/api/subscribe', { email });
      setMessage(response.data.message);
      setEmail(''); // Clear input after successful submission
    } catch (error: any) {
      setMessage(error.response?.data?.error || 'Subscription failed. Try again.');
    }

    setLoading(false); // Set global loading state to false
  };

  // Hide the message after 10 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 12000);

      return () => clearTimeout(timer); // Cleanup function
    }
  }, [message]);

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
              {loading ? (
                <Skeleton width={250} height={100} />
              ) : (
                <img
                  src={walamenLogo}
                  alt="Walamen Logo"
                  className="h-[100px] w-[250px] object-contain"
                />
              )}
            </Link>
            <p className="text-gray-300 mb-6">
              {loading ? (
                <Skeleton count={3} width="100%" />
              ) : (
                'Pioneering sustainable solutions across industries, driving innovation and transformation for a better tomorrow.'
              )}
            </p>
            <div className="flex space-x-4">
              {loading
                ? Array.from({ length: 4 }).map((_, index) => (
                    <Skeleton key={index} width={40} height={40} borderRadius={20} />
                  ))
                : socialLinks.map(({ Icon, href, label }) => (
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
            <h4 className="font-bold text-lg mb-4">
              {loading ? <Skeleton width={120} /> : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {loading
                ? Array.from({ length: 5 }).map((_, index) => (
                    <li key={index}>
                      <Skeleton width={100} height={20} />
                    </li>
                  ))
                : [
                    { to: '/about', text: 'About Us' },
                    { to: '/services', text: 'Services' },
                    { to: '/industries', text: 'Industries' },
                    { to: '/insights', text: 'Insights' },
                    { to: '/contact', text: 'Contact' },
                  ].map(({ to, text }) => (
                    <li key={to}>
                      <Link to={to} className="text-gray-300 hover:text-white">
                        {text}
                      </Link>
                    </li>
                  ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-bold text-lg mb-4">
              {loading ? <Skeleton width={120} /> : 'Industries'}
            </h4>
            <ul className="space-y-2">
              {loading
                ? Array.from({ length: 5 }).map((_, index) => (
                    <li key={index}>
                      <Skeleton width={150} height={20} />
                    </li>
                  ))
                : [
                    { to: '/industries/healthcare', text: 'Social Sector' },
                    { to: '/industries/technology', text: 'Technology' },
                    { to: '/industries/finance', text: 'Logistic and Infrastructure' },
                    { to: '/industries/education', text: 'Education' },
                    { to: '/industries/manufacturing', text: 'Agriculture' },
                  ].map(({ to, text }) => (
                    <li key={to}>
                      <Link to={to} className="text-gray-300 hover:text-white">
                        {text}
                      </Link>
                    </li>
                  ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">
              {loading ? <Skeleton width={150} /> : 'Stay Connected'}
            </h4>
            <p className="text-gray-300 mb-4 font-light">
              {loading ? (
                <Skeleton count={2} width="100%" />
              ) : (
                'Receive Walamen insights and event invitations on topics relevant to your business and role.'
              )}
            </p>
            <form className="space-y-3" onSubmit={handleSubscribe}>
              {loading ? (
                <Skeleton height={40} />
              ) : (
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              )}
              {message && <p className="text-green-500">{message}</p>}
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex justify-center items-center"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              {loading ? (
                <Skeleton width={200} />
              ) : (
                `© ${new Date().getFullYear()} Walamen. All rights reserved.`
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {loading
                ? Array.from({ length: 3 }).map((_, index) => (
                    <Skeleton key={index} width={100} height={20} />
                  ))
                : [
                    { to: '/terms', text: 'Terms of Use & Disclosures' },
                    { to: '/privacy', text: 'Privacy Policy' },
                    { to: '/accessibility', text: 'Accessibility' },
                  ].map(({ to, text }) => (
                    <Link key={to} to={to} className="text-gray-300 hover:text-white">
                      {text}
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}