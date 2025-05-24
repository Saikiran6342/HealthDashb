import React from 'react';
import { healthStatusCards } from '@/data/healthData';

const HealthStatusCards: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 mt-6 md:mt-0">
      {healthStatusCards.map((card, index) => (
        <div key={index} className="bg-neutral-light p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">{card.title}</h3>
              <p className="text-xs text-neutral-dark">Last check: {card.lastCheck}</p>
            </div>
            <span className={`w-3 h-3 ${card.statusColorClass} rounded-full`}></span>
          </div>
          <p className="text-xs mt-2">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
