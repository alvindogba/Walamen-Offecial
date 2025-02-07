import  { useState } from 'react';
import { Search, X } from 'lucide-react';

const DesktopSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden md:flex items-center">
      <div className="relative flex items-center">
        <div
          className={`
            absolute right-0
            flex items-center
            transform transition-all duration-300 ease-out
            ${isOpen ? 'w-64 opacity-100' : 'w-0 opacity-0'}
          `}
        >
          <input
            type="text"
            placeholder="Search..."
            className={`
              w-full px-4 py-2 pr-8
              border-b-2 border-gray-200
              focus:border-primary focus:outline-none
              bg-transparent
              ${isOpen ? 'visible' : 'invisible'}
            `}
            autoFocus={isOpen}
          />
          {isOpen && (
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-0 p-2 text-gray-500 hover:text-primary"
              aria-label="Close search"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-500 hover:text-gray-700 p-2"
            aria-label="Open search"
          >
            <Search className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default DesktopSearch;