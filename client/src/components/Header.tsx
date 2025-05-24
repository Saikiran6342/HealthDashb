import React from 'react';
import { Search, Bell, Plus, Menu } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center px-6 flex-shrink-0">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar} 
            className="md:hidden mr-4 text-neutral-dark"
          >
            <Menu size={20} />
          </button>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-neutral-light rounded-lg py-2 pl-10 pr-4 w-64 text-sm focus:outline-none" 
            />
            <Search className="absolute left-3 top-2.5 text-neutral-dark text-sm h-4 w-4" />
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="relative">
            <Bell className="text-neutral-dark h-5 w-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent-red rounded-full"></span>
          </div>
          <button className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">
            <Plus className="h-4 w-4" />
          </button>
          <div className="flex items-center space-x-3">
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40" 
              alt="User profile" 
              className="rounded-full w-10 h-10 object-cover" 
            />
            <div>
              <p className="text-sm font-medium">Dr. Sarah Chen</p>
              <p className="text-xs text-neutral-dark">Cardiologist</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
