import React from 'react';
import { LayoutGrid, History, CalendarDays, CheckSquare, PieChart, Beaker, MessageSquare, Headphones, Settings } from 'lucide-react';

export const navigationLinks = [
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
