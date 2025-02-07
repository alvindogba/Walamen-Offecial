import  { useState } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {isOpen ? (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center bg-white border rounded-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-64 px-4 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
            autoFocus
            
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-500 hover:text-primary"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="text-gray-500 hover:text-gray-700"
        >
          <Search className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;