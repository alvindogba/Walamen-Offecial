import { Search } from 'lucide-react';

const MenuSearch = () => {
  return (
    <div className="flex-1 max-w-2xl">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 pl-12 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-colors"
          autoFocus
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default MenuSearch;