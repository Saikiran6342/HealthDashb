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
              {/* Head/top circle */}
              <circle cx="100" cy="45" r="25" fill="#FFD180" stroke="#E65100" strokeWidth="1" />
              
              {/* Body shape */}
              <path d="M100,70 C140,70 140,120 140,160 C140,210 130,250 120,280 C110,300 100,310 100,310 C100,310 90,300 80,280 C70,250 60,210 60,160 C60,120 60,70 100,70 Z" 
                fill="#FFE0B2" stroke="#E65100" strokeWidth="1" />
              
              {/* Face features */}
              <circle cx="85" cy="85" r="3" fill="#795548" /> {/* Left eye */}
              <circle cx="115" cy="85" r="3" fill="#795548" /> {/* Right eye */}
              <line x1="80" y1="100" x2="120" y2="100" stroke="#795548" strokeWidth="1" /> {/* Mouth */}
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
