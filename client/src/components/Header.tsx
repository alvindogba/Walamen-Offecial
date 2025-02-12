import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, PhoneCall } from 'lucide-react';
import Logo from './header/Logo';
import MobileMenu from './header/MobileMenu';
import DesktopSearch from './header/DesktopSearch';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
              <Logo />
            </div>

            <div className="flex items-center gap-6">
              <DesktopSearch />
              <button className="text-gray-500 hover:text-gray-700">
                <Link to="/contact">
                <PhoneCall className="h-6 w-6 text-secondary" />
                </Link>
              </button> 
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Header;