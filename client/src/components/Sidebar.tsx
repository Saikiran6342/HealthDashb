import React from 'react';
import { LayoutGrid, History, CalendarDays, CheckSquare, PieChart, Beaker, MessageSquare, Headphones, Settings } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

// Define navigation links directly in the component to avoid import issues
const navLinks = [
  {
    name: 'Dashboard',
    icon: <LayoutGrid size={16} />,
    active: true
  },
  {
    name: 'History',
    icon: <History size={16} />,
    active: false
  },
  {
    name: 'Calendar',
    icon: <CalendarDays size={16} />,
    active: false
  },
  {
    name: 'Appointments',
    icon: <CheckSquare size={16} />,
    active: false
  },
  {
    name: 'Statistics',
    icon: <PieChart size={16} />,
    active: false
  },
  {
    name: 'Tests',
    icon: <Beaker size={16} />,
    active: false
  },
  {
    name: 'Chat',
    icon: <MessageSquare size={16} />,
    active: false
  },
  {
    name: 'Support',
    icon: <Headphones size={16} />,
    active: false
  },
  {
    name: 'Settings',
    icon: <Settings size={16} />,
    active: false
  }
];

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
              {navLinks.map((link, index) => (
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
