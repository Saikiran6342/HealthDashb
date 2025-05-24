import React from 'react';
import { navigationLinks } from '@/data/navigationLinks';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside className={`w-60 bg-white flex-shrink-0 shadow-sm md:block ${isOpen ? 'block fixed z-40 h-full' : 'hidden'}`}>
      <div className="p-6">
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-primary">Healthcare.</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <p className="text-neutral-dark text-xs font-medium uppercase tracking-wider mb-4">General</p>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li 
                  key={index} 
                  className={`flex items-center ${link.active ? 'text-primary font-medium' : 'text-neutral-dark hover:text-primary transition-colors'}`}
                >
                  <span className="mr-3 w-5 text-center">{link.icon}</span>
                  <span>{link.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
