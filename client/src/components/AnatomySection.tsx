import React from 'react';
import HealthStatusCards from './HealthStatusCards';
import { healthIndicators } from '@/data/healthData';

const AnatomySection: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          {/* Human body anatomy illustration */}
          <div className="relative w-48 h-80">
            <svg viewBox="0 0 200 320" className="w-full h-full">
              <path d="M100,40 C130,40 150,70 150,100 C150,115 145,125 140,135 C135,145 130,155 130,170 C130,190 135,205 135,215 C135,230 130,240 125,250 C120,260 115,270 110,280 C105,290 100,300 100,300 C100,300 95,290 90,280 C85,270 80,260 75,250 C70,240 65,230 65,215 C65,205 70,190 70,170 C70,155 65,145 60,135 C55,125 50,115 50,100 C50,70 70,40 100,40 Z" 
                fill="#FFE0B2" stroke="#E65100" strokeWidth="1" />
              <circle cx="100" cy="25" r="20" fill="#FFD180" stroke="#E65100" strokeWidth="1" />
              <line x1="80" y1="90" x2="120" y2="90" stroke="#E65100" strokeWidth="1" />
              <circle cx="90" cy="80" r="3" fill="#795548" />
              <circle cx="110" cy="80" r="3" fill="#795548" />
            </svg>
            
            {/* Health Indicators */}
            {healthIndicators.map((indicator, index) => (
              <div 
                key={index} 
                className={`absolute ${indicator.position}`}
              >
                <div className="flex items-center">
                  <span className={`w-3 h-3 ${indicator.colorClass} rounded-full`}></span>
                  <span className="ml-2 text-xs whitespace-nowrap">{indicator.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <HealthStatusCards />
      </div>
    </div>
  );
};

export default AnatomySection;
