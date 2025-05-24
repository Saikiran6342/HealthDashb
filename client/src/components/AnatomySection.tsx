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
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src="https://cdn-academy.pressidium.com/academy/wp-content/uploads/2021/09/Abdomenal-Muscles.png" 
                alt="Abdominal Muscles Anatomy" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
        
        <HealthStatusCards />
      </div>
    </div>
  );
};

export default AnatomySection;
