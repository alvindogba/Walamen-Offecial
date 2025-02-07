import { X } from 'lucide-react';
import NavLinks from './NavLinks';
import MenuSearch from './MenuSearch';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Menu */}
      <div 
        className={`fixed inset-x-0 top-16 bottom-0 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="bg-white h-full shadow-lg overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-8">
              <MenuSearch />
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 p-2 ml-4"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              <NavLinks onItemClick={onClose} />
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;