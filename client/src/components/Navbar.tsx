import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bars3Icon, 
  MagnifyingGlassIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">Walatech</span>
              <div className="w-8 h-8 bg-secondary rounded-full"></div>
            </Link>

            <div className="flex items-center space-x-6">
              <Link to="/contact" className="text-primary hover:text-secondary transition-colors">
                <EnvelopeIcon className="w-6 h-6" />
              </Link>
              <button
          
                className="text-primary hover:text-secondary transition-colors"
              >
                <MagnifyingGlassIcon className="w-6 h-6" />
              </button>
              <button
               
                className="text-primary hover:text-secondary transition-colors"
              >
                <Bars3Icon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu and Search components remain the same */}
    </>
  );
}